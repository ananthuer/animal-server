module.exports = (sequelize ,Sequelize) =>{

    const Animals = sequelize.define("animals", {

        API:{
            type: Sequelize.STRING
        },

        Description:{
            type: Sequelize.STRING
        },

        Auth:{
            type: Sequelize.STRING
        },

        HTTPS:{
            type: Sequelize.STRING
        },


        Cors:{
            type:Sequelize.STRING
        },
        Link:{
            type: Sequelize.STRING
        },
        
        Category : {
            type : Sequelize.STRING
        }
       
    })

    return Animals
}