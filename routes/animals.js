const router  = require('express').Router()

const { body, check , validationResult} = require('express-validator');

const animalsController = require('../controller/animals')

const isAdmin = require('../middleware.js/authmiddlewear');

router.post('/',[
  

],animalsController.add)

router.get("/", [

    check('limit')
    .optional()
    .toInt(),

    check('page')
    .optional()
    .toInt()
],  animalsController.getAnimals)

router.get("/:id",[
    check('limit')
    .optional()
    .toInt(),

    check('page')
    .optional()
    .toInt(),


],animalsController.getOneAnimals)

router.put('/:id',[
  
],animalsController.updateAnimals)

router.delete("/:id",animalsController.deleteAnimal)




module.exports = router