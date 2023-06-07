module.exports = (app) =>{

    app.use('/v1/api/animals', require('./animals'))

    app.use('/v1/api/auth',require("./auth"))
    
    app.use('/v1/api/roles',require("./roles"))

     app.use('/v1/api/company',require("./company"))

     

     



   app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    return res.status(status).json({
        success: false,
        error: error.data || error.message 
    }); } )
}