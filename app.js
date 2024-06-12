const mongoose =require("mongoose");
 //require("dotenv").config();

 const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("DataBase Connected"))
    .catch((error)=>{
        console.log("DataBase Connection Error");
        console.error(error.message);

        process.exit(1);
    });
 }

 module.exports = dbConnect;

/*
Summary
Import Mongoose: Loads the mongoose library to interact with MongoDB.
(Optional) Load Environment Variables: If uncommented, loads environment variables from a .env file.
Define dbConnect Function: Creates a function to connect to the MongoDB database.
Connect to Database: Uses mongoose.connect with the database URL and options to establish a connection.
Handle Success: Logs a success message if the connection is successful.
Handle Errors: Logs error messages and exits the program if the connection fails.
Export the Function: Makes the dbConnect function available for use in other files.
*/ 