// Require express for our project to easily build out our API.
const express = require("express");

// Same as Express, we are Requiring Cors to act as the Middleware to handle our Requests and Responses.
const cors = require("cors");

//Assign express to "app" to be able to call upon express functions.
const app = express();

//Call upon Cors to use in our application, sets up the necessary CORS headers in the HTTP responses sent by the server. 
app.use(cors());

// Add this function to our Middleware stack. This will be executed for every incoming request, and attempt to parse the request body for JSON data.
app.use(express.json());

// Deconstruct the functions so we do not have to use dot notation (controller.getCompliment()) and import the controller.js file.
const { 
    getCompliment,
    getFortune,
    newCompliment,
    deleteCompliment
 } = require('./controller')

//Define our route handler (EndPoints), GET HTTP method is assigned to /api/compliment. We attach getCompliment call back function to be called upon at this location for the response. 

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/compliment", newCompliment);
app.delete("/api/compliment/:index", deleteCompliment);

//Start the server on port 4000 and use a callback function to console log that it is indeed running.
app.listen(4000, () => console.log("Server running on 4000"));

