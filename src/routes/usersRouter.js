//import the router and instantiate(get an object of the router)

const router = require('express-promise-router')();  
const {SignUp, Login} = require('../controllers/usersControllers');

router.route("/signup").post(SignUp);
router.route("/login").post(Login);

module.exports = router; 

//nodemon means node monitor