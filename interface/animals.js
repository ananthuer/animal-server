const { job, jobPosition, Sequelize, animals } = require('../models');


const genPassword = require('../lib/passwordUtlis').genPassword;

exports.add = async(API, Description, Auth, HTTPS, Cors, Link, Category) =>{



    const animal = await animals.create({
        API,
        Description,
        Auth, 
        HTTPS,
        Cors,
        Link,
        Category
    })
    return animal
}
    


exports.getAnimals = async(page, limit) => {

    let query = {
        limit: (limit || 10),
        offset: ((page || 1) - 1) * (limit || 10)
    }

   

   
    
    return await animals.findAll(query)

    


   
}


exports.getOneAnimals = async(userId) =>{

    const animal = await animals.findByPk(userId)

    return animal

}
exports.updateAnimals = async( id,API, Description, Auth, HTTPS, Cors, Link, Category) =>{


    const animal = await animals.update({

        API,
        Description,
        Auth, 
        HTTPS,
        Cors,
        Link,
        Category
        

    },{where:{id: id}})

    
    return animal

    
 }

 exports.deleteAnimal = async(id) =>{

    const animal = await animals.destroy({where:{id: id}})

    return animal
}

    



   
