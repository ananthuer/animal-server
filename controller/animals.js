const { name } = require('ejs')
const animalInterface = require('../interface/animals')
const { handleRequest } = require('../utlis/requestValidator')


exports.add = async(req, res, next) =>{

    handleRequest(req,next,async () =>{
        const animals  = await animalInterface.add(
        
            req.body.API,
            req.body.Description,
            req.body.Auth,
            req.body.HTTPS,
            req.body.Cors,
            req.body.Link,
            req.body.Category
        )
           
        res.json({
            message:true,
            animals
        })
    })

   
}



exports.getAnimals = async(req, res, next) =>{


   handleRequest(req, next, async () => {

    const animal = await animalInterface.getAnimals(
      
        req.query.page || 1,
        req.query.limit || 10,
)

    res.json({
        message:true,
        animal
    })
   })

}
exports.getOneAnimals = async(req, res,next) =>{
    handleRequest(req, next, async () => {


    const animal = await animalInterface.getOneAnimals(req.params.id)

    res.json({
        message:true,
        animal
    })
})
}
exports.updateAnimals = async(req, res, next) =>{

    handleRequest(req, next, async () =>{

        const user = await animalInterface.updateAnimals(
            req.params.id,
            req.body.name,       
            req.body.roleId
        )

        return res.json({
            message:true,
            user
        })
})
}
exports.deleteAnimal = async(req, res) =>{



    const user = await animalInterface.deleteAnimal(req.params.id)

    res.json({
        message:true,
        user
    })
}


