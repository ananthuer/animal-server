const router  = require('express').Router()

const companyController = require('../controller/company')

const { body, check , validationResult} = require('express-validator');
const isAdmin = require('../middleware.js/authmiddlewear');



router.post('/',[
    body('email')
    .isEmail().withMessage('invalid email')
   ,  

    body('phone')
    .isInt().withMessage("Phone number cannot be empty")
    .isLength({min:10,max:10}).withMessage("phone number must be of 10 digits")
    ,

    body('name')
    .isString().withMessage("Name cannot be empty")
   



],companyController.createCompany)




router.get('/',[

    
        check('limit')
        .optional()
        .toInt(),
    
        check('page')
        .optional()
        .toInt(),
    
    
    
    
],companyController.getCompany)




router.get('/:id', companyController.getOneCompany)




router.put('/:id',[


    body('email')
    .isEmail().withMessage('invalid email')
   ,  

    body('phone')
    .isString().withMessage("Phone number cannot be empty")
    .isLength({min:10,max:10}).withMessage("phone number must be of 10 digits")
    ,

    body('name')
    .isString().withMessage("Name number cannot be empty")
    
],companyController.updateCompany)





router.delete('/:id',companyController.deleteOneCompany)






module.exports = router