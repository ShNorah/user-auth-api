//creating a users schema
const { Schema } = require("mongoose"); //create schema from mongoose.schema
const UsersSchema = new Schema({ //creating a new schema
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.export = UsersSchema;
