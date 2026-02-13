const app = require('./app');
const dbConnect = require('./src/config/db');
const dotenv = require('dotenv').config();
const authRoutes = require('./src/routes/authRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require("./src/routes/userRoutes");

// conncet to MongoDB
dbConnect();

//Routes 
app.use('/api/v1/auth', authRoutes);

app.use("/api/v1/tasks",taskRoutes);

app.use("/api/v1/users", userRoutes)

// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})