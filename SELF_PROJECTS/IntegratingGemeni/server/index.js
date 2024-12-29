const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
  credentials: true,
}));

app.use(express.json());
app.use(bodyParser.json());

app.post('/api/aiSearch', async (req, res) => {
  const { query } = req.body;

  try {
    const result = await model.generateContent(query);
    res.send({ result: result.response.text() });
  } catch (err) {
    console.log({ "error": err.message });
    res.status(500).send({ "error": err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`);
});
