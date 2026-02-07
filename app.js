const express = require('express');
const dontenv = require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Connect to MongoDB
dbConnect();

// express app initialization
const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(helmet());
app.use(express.json());



//Routes 
app.use('/api/v1/auth', authRoutes);

app.use("/api/v1/tasks", taskRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})