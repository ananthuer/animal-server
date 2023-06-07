const passport = require('passport');
const { Sequelize } = require('../models');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = require ('../models').users;
const validPassword = require('../lib/passwordUtlis').validPassword;

const customfields = {
    usernameField: 'username',
    passwordField: 'password'
};

const verifyCallback = async(username, password, done, res,)=>{

   
    await  User.findOne({ where: { 
        [Sequelize.Op.or]: [
            {
                phone: username
            },
            {
                email: username
            }
        ]
    }})
        .then((user)=>{

            console.log(user)
  
          if(!user){ return done (null, false)}
  
          const isValid = validPassword(password, user.hash, user.salt);
          
          if (isValid){
              return done (null, user);   //req.user  
            } else{
                return done (null, null)
            }

            })
            .catch((err)=>{
                console.log("error", err);
                done(err);
            });
  
          
         
}
const Strategy = new LocalStrategy(customfields, verifyCallback);

passport.use(Strategy);
passport.serializeUser((userId, done)=>{
    done(null, userId);
});

passport.deserializeUser((userId, done)=>{
    if (userId != null && userId != "You are not authorized user") {
        User.findByPk(userId)
        .then((user)=>{
            done(null, user);
    
        })
        .catch(err => done(err))
    } else {
        done(null, null)
    }
    
})
