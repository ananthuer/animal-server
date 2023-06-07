const { Sequelize, sequelize } = require('../models')

const Company = require('../models').company



exports.createCompany = async( name,phone,email,address) =>{

    const company = await Company.create({

    name,
    phone,
    email,
    address
    
})
   
    return company
}



exports.getCompany = async(search, page, limit,startDate,endDate) =>{

    let query = {
        limit: limit || 10,
        offset: ((page || 1) - 1) * (limit || 10)
    }



    
    return await Company.findAll(query)
    
}



exports.getOneCompany = async(companyId) =>{
    
    const company = await Company.findByPk(companyId)

    return company
}


exports.updateCompany = async(companyId ,name,phone,email,address ) =>{
       
            
        
    const company = await Company.update({

        name,
        phone,
        email,
        address

    },{where:{id: companyId}})

    
    return company

}


exports.deleteOneCompany = async(companyId) =>{

    const company = await Company.destroy({where:{id: companyId}})
 
    return company
 }


 exports.fetchCompanyByEmail = async (email) => {
    return await Company.findOne({
        where: {
            email
        }
    })
}

exports.fetchCompanyByPhone = async (phone) => {
    return await Company.findOne({
        where: {
            phone
        }
    })
}
exports.fetchCompanyByName = async (name) => {
    return await Company.findOne({
        where: {
            name
        }
    })
}


exports.getCompanyJobPos = async(companyId) =>{
    
    const company = await Company.findByPk(companyId)

    return await company.getjobPosition()
}
