const Consumer = require("../models/consumer");




exports.createConsumer = async (req, res) => {
    const { fname, lname,  email } = req.body;

    if (!fname || !lname  || !email ) {
        return res.status(400).json({
            success: false,
            message: "Enter all the details carefully"
        });
    }

    try {
       
        const existingUserCount = await Consumer.countDocuments();
        const consumer_id = existingUserCount + 1;

      
        const newUser = await Consumer.create({consumer_id, fname, lname, email });

       
        res.status(200).json({
            success: true,
            data: { newUser},
            message: "User created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: "Error in creating user"
        });
    }
};
/*
Summary
Import the Consumer Model: Load the Consumer model to interact with the consumer data in the database.
Define createConsumer Function: Create an asynchronous function to handle the creation of a new consumer.
Extract Data: Get fname, lname, and email from the request body.
Validate Input: Check if any required fields are missing and respond with an error if they are.
Count Existing Consumers: Determine the current number of consumers in the database to assign a new ID.
Create New Consumer: Create a new consumer with the provided data.
Send Success Response: If successful, send a response with the new consumer data.
Handle Errors: Catch and log any errors, then send an error response.
*/