module.exports = (sequelize ,Sequelize) =>{

    const Roles = sequelize.define("roles", {

        title:{
            type: Sequelize.STRING
        },

        description:{
            type: Sequelize.STRING
        }
    })

    return Roles
}