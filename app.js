const express = require('express');
const db = require('./src/db/db')  //import the db.js file that has database connection
const bodyparser = require("body-parser");
const UsersRouter = require("./src/routes/usersRouter");
const app = express();

app.use(bodyparser.json());  //middleware
app.use(UsersRouter); //tell our express appto use router

app.use(express.json()); //use json format for our data


const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server running at port ${port}`);

});
//replace the word test with the name of the db in the connections string