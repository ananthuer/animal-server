const { roles } = require('../models');





exports.createRole = async( title,description,) =>{

        const role = await roles.create({

        title,
        description
        
    })
       
        return role
    }



    exports.getRole = async() =>{

        const role = await roles.findAll()
    
        return role
    }

    exports.getOneRole = async(roleId) =>{
    
        const role = await roles.findByPk(roleId)
    
        return role
    }

    
    exports.updateRole = async(roleId ,title, description) =>{
       
            
        
            const role = await roles.update({
        
                title,
                description
                
        
            },{where:{id: roleId}})
        
            
            return role
        
    }


exports.deleteOneRole = async(roleId) =>{

   const role = await roles.destroy({where:{id: roleId}})

   return role
}

exports.fetchRoleByTitle = async (title) => {
    return await roles.findOne({
        where: {
            title: title
        }
    })
}