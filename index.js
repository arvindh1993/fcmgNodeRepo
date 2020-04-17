// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
var cors = require('cors')
/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */
app.use(cors());
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.status(200).send({resp:'WHATABYTE: Food For Devs'});
  });
/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });