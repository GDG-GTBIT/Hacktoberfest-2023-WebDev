const mongoose = require('mongoose')

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("DB ka connection is successful")})
    .catch((error)=>{
        console.log("Issue in DB connection")
        console.error(error.message)
        //iska mtlb kya h?
        process.exit(1)
    });
}

module.exports = dbConnect;