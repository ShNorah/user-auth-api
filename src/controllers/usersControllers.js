const db = require("../db/db");  //importing the connection

const User = require("../models/User"); //import the model 

//check connection
db.once("open", () => {
  console.log("CONNECTION STATUS: CONNECTION SUCCESSFUL");
});

db.on("error", () => {
  console.log("CONNECTION STATUS: CONNECTION FAILED");
});


//exportind signup, login and view users functions
module.exports = { //structuring a controller
  SignUp: (req, res) => {
        const NewUser = new User({       
                username: req.body.newuser,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                  });
                  
                  NewUser.save();
                  //promises
                then((saved)=>{
                    console.log("NEW USER SAVED:", saved);
                    return res.status(200).json({message: "Signup successful"});
                })
                .catch((error) =>{
                      console.log("ERROR OCCURED:", error);
                      return res.status(400).json({message: "Signup failed"});
                  })
                  
                },
  Login: () => {},
  ViewUsers: () => {},
};


