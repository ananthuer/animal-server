const router  = require('express').Router()

const passport = require('passport');
const authController = require('../controller/auth')


const { body, check , validationResult} = require('express-validator');


router.post('/user',passport.authenticate('local'),authController.auth)



module.exports = router