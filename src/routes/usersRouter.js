//import the router and instantiate(get an object of the router)

const router = require('express-promise-router')();  
const {SignUp} = require('../controllers/usersControllers');

router.route("/signup").post(SignUp);

module.exports = router;