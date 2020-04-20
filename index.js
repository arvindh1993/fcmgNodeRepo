// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
var cors = require('cors');
var request = require('request'); 

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
var getApiCall = function getApiCall(cb){

 var url ='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  request(url, function (error, response, body) {
    cb(error,response,body); //callback function
  });
   
}
app.get('/',function(req,res) {
  
  var result = getApiCall(function(err,response,data){
   if(!err){
     res.send(data);   
   }
  });
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });