var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const { request } = require('express');
const User = require ('../models').users;
const authInterface = require('../interface/auth')

exports.auth =  async(req, res, next) => {

  

  try {


   // const user = await User.findOne({phone});


    //[{ id, title }]

    if (req.user != null) {
      let user = req.user;
      let role = await user.getRole()
      let token = jwt.sign(
        {    phone: req.user.phone, id: req.user.id, role: role.title},
        "qwerty"
      );
      return res.json({ success: true, message: req.user, token });
    }

    return res.json({
      success: false,
      message: "you are not Authorized",
    });
  } catch (error) {
    console.log(error)
  }
   
}