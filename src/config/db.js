const mongoose = require('mongoose');

const dbConnect = async () => {{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connect to MongoDB successfully")
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}}

module.exports = dbConnect;