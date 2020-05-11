//define user models
const mongoose = require('mongoose');
const UsersSchema = require('./schemas/usersSchema'); //importing UsersSchema
const Users = mongoose.model('users', UsersSchema); //give the name of the model and then pass in the schema

//const Joi = require('joi');
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');



module.exports = Users;