const mongoose = require('mongoose');
const config = require('config');

module.exports.ConnectDB = function() {
    // get DB Connection String
    const connectionString = config.get('db');
    
    //console.log(connectionString);
    
    // try to open connection to DB
    mongoose.connect(connectionString, { useCreateIndex: true, useNewUrlParser: true })
        .then(() => console.log(`Connected to MongoDB at ....... ${connectionString}`))        
        .catch(err => console.error(`Could not connected to MongoDB at .......... ${connectionString}, please check connection string, DB Server or network`));
}

