
const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db').ConnectDB();

// Application listening on port that define in environment variable, 
// if not define the defaulf port will be 3000 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));