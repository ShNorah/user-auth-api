const mongoose = require('mongoose');
require('dotenv').config();  //import dotenv

//connect to mongodb
mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,    //avoid deprecation warnings
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(()=> {
    console.log("successful");
})
.catch(error => console.log("failure", error));

const db = mongoose.connection; //connection method helps in connection

module.exports = db;