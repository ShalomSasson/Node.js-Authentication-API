
const express = require("express");
const user = require("../routes/user");

function SetApplicationRoutes(app){
    app.use(express.json());
   
    // here are routes for  services
    app.use('/api/user', user);

}

module.exports = SetApplicationRoutes