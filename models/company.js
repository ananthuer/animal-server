module.exports = (sequelize ,Sequelize) =>{

    const Company = sequelize.define("company", {

        name:{
            type: Sequelize.STRING
        },

        phone:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        address:{
            type: Sequelize.STRING
        }
    })

    return Company
}