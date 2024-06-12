const express = require("express");
const dbConnect = require("./config/app");
const routes = require("./routers/reoutes");
const campaignroute = require("./routers/campaignRoutes");
const communicationroute = require("./routers/communicationRoutes");
const vendorroute= require("./routers/VendorRoutes");
//const recieptroute = require("./routers/recieptRoutes");

const app = express();
require('dotenv').config(); 

const PORT = process.env.PORT|| 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Your Project has been initiated, Welcome to the project</h1>`);
});

app.use("/v1/api",routes);
app.use("/v1/api",campaignroute);
app.use("/v1/api",communicationroute);
app.use("/v1/api",vendorroute);
//app.use("/v1/api",recieptroute);

// Connect to the database
dbConnect();

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));