const db = require("../db/db");  //importing the connection

const User = require("../models/User"); //import the model 

//check connection
db.once("open", () => {
  console.log("CONNECTION STATUS: CONNECTION SUCCESSFUL");
});

db.on("error", () => {
  console.log("CONNECTION STATUS: CONNECTION FAILED");
});

//exporting signup, login and view users functions
module.exports = { //structuring a controller
 SignUp: (req, res) =>{
  const req_username = req.body.username;
  const req_password = req.body.password;
  const req_firstName = req.body.firstName;
  const req_lastName = req.body.lastName;

   //first check if user exists in the database  in the users collection
   User.findOne({username: req_username})

   .then(user=>{
     if(user){
       return res.status(400).json({message: "username already exists"})

     }else{
       //create a new user
       const NewUser = new User({
        username: req_username,
        password: req_password,
        firstName: req_firstName,
        lastName: req_lastName
      });
      NewUser.save()
      .then(saved =>{
        console.log("New User Saved", saved);
        return res.status(200).json({message: "Signup successful"})
      })
      .catch(error=>{
       console.log("Error Occured", error);
       return res.status(400).json({message: "Signup failed"})
      });
     }
   })  
 }, 

 //login controller
 Login: (req, res)=>{
   const login_username = req.body.username;
   const login_password = req.body.password;

   User.findOne({username: login_username, password: login_password})
   .then(user=>{
     if(user){
       return res.status(200).json({message: "login successful"});

     }else{
      return res.status(400).json({message: "login failed, no such user exists"})
     }
   })
   .catch(error=>{
    return res.status(400).json({error: "error occurred"})
   })
   
 },
 ViewUsers: ()=>{}
};