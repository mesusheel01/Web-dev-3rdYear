import express from 'express'
import { Server } from 'socket.io'
import {createServer} from 'http'
import cors from 'cors'


const port = 3000


const app = express()
const server = createServer(app)

const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });
app.use(cors(
        {
        origin: "http;//localhost:5173/",
        methods: ['GET', 'POST'],
        credentials: true,
    }
))


app.get('/', (req,res)=>{
    res.send("Hello World");
})
io.on('connection' , (socket)=>{
    console.log('user Connected ', socket.id)
    // socket.emit('welcome', `Welcome to the server ${socket.id}`)
    // socket.broadcast.emit('welcome', `${socket.id} joined the server`)
    socket.on('message', (data)=>{
        console.log('Message from client Side : ',data)
        // io.emit('receive-message', data) //it will send message to all including sender
        socket.broadcast.emit('receive-message', data) // msg khud ko nhi ayega baki connected socket ko jayega

    })
    socket.on('disconnect', ()=>{
        console.log('User disconnected', socket.id);

      })
    
})



server.listen(port, ()=>{
   console.log(`Server is listening on port http://localhost:${port}`) 
})