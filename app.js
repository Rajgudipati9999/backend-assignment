const express = require('express');
// const dontenv = require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');

// express app initialization
const app = express();

// Global Middlewares
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(helmet());
app.use(express.json());


module.exports = app;
