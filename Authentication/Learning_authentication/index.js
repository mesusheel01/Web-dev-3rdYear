import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
//express-session allows us to add cookies to user browers and when he will re reach to our site they will have no more need to login if the cookie isn't expired
import passport from "passport";
//passport allows us to add lot of authentication strategy in one app
//used as middleware to authenticate user
import { Strategy } from "passport-local";
import env from "dotenv";
import  GoogleStrategy  from "passport-google-oauth2";

///cookies contains users credentials which shows user is completely authenticated and its info will be saved to the browser so every time user came to site then he do now have to login again!


const app = express();
const port = 3000;
const saltRounds = 10;
env.config()

 app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 1000 * 60 * 60 *24, 
  }
 }))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//use passport only after a session is intializaTION
//middleware to 
app.use(passport.initialize());
app.use(passport.session());


const db = new pg.Client({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.get("/logout", (req,res)=>{
  req.logout(function( err){
    if(err){
      return next(err);
    }
    res.redirect("/");
  })
})

app.get("/secrets", (req, res) => {
  // console.log(req.user);
  // it checks if the user is authenticated by checking  cookies if does then show secrets to them directyly
  if (req.isAuthenticated()) {
    res.render("secrets.ejs",);

  } else {
    res.redirect("/login");
  }
});
app.get("/auth/google", passport.authenticate("google", {
  scope:["profile", "email"],
}))


app.post(
  "/login" , 
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
)

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
      // res.redirect("/login")
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err)=>{
            console.log(user);
            res.redirect("/secrets")
          })
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});



passport.use("local",new Strategy(async function verify(username, password, cb){
  // console.log(username)
  // console.log(password)
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          console.log("Error comparing passwords:", err) 
          return cb(err);
        } else {
          if (result) {
            //passed password check
            return cb(null,user)
          } else {
            // did not pass password check
            return cb(null, false);
          }
        }
      });
    } else {
      return cb("user not found")
    }
  } catch (err) {
    return cb(err)
  }
})) ;
//google oauth strategy
passport.use("google",new GoogleStrategy({
  clientID:     process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET_ID,
  callbackURL: "http://localhost:3000/auth/google/callback",
  userProfileUrl: "https://www.googleapis/oauth2/v3/userinfo",
  passReqToCallback   : true
},  async (accessToken, refreshToken, profile, cb)=>{
  console.log(profile)
}
));


passport.serializeUser((user,cb)=>{
  cb(null,user)
})
passport.deserializeUser((user,cb)=>{
  cb(null,user)

})

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
