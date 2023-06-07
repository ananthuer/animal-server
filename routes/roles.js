const router  = require('express').Router()

const { body, check , validationResult} = require('express-validator');

const roleController = require('../controller/roles');
const { fetchRoleByTitle } = require('../interface/roles');
const isAdmin = require('../middleware.js/authmiddlewear');

router.post('/',[
    
        body('title')
        .isString().withMessage("Title cannot be empty")
        .custom(async (value, {req}) => {
            //If database has "value"
            let role = await fetchRoleByTitle(value);
            if (role != null) return Promise.reject(`${value} already exists`)
            return true;
        }),
        
        body('description')
        .isString().withMessage("Description cannot be empty")
    
],roleController.createRole)




router.get('/',isAdmin,roleController.getRole)

router.get('/:id',isAdmin,roleController.getOneRole)

router.put('/:id',[
    body('title')
        .isString().withMessage("Title cannot be empty")
        .custom(async (value, {req}) => {
            //If database has "value"
            let role = await fetchRoleByTitle(value);
            if (role != null) return Promise.reject(`${value} already exists`)
            return true;
        }),
        
        body('description')
        .isString().withMessage("Description cannot be empty")
], roleController.updateRole)







router.delete("/:id", isAdmin,roleController.deleteOneRole)





module.exports = router