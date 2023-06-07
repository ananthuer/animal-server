const roleInterface = require('../interface/roles')
const { handleRequest } = require('../utlis/requestValidator')


exports.createRole = async (req,res,next) => {
  handleRequest(req, next, async () => {

    const roles = await roleInterface.createRole(
        req.body.title,
        req.body.description
    )

    return res.json({
        message:true,
        roles
    })
  })
  
  
  
}

exports.getRole = async(req, res,next) =>{
    handleRequest(req, next, async () => {

    const roles = await roleInterface.getRole()

    res.json({
        message:true,
        roles
    })
})
}

exports.getOneRole = async(req, res,next) =>{
    handleRequest(req, next, async () => {


    const roles = await roleInterface.getOneRole(req.params.id)

    res.json({
        message:true,
        roles
    })
})
}
exports.updateRole = async(req, res, next) =>{
    handleRequest(req, next, async () => {

    const roles = await roleInterface.updateRole(
        req.params.id,
        req.body.title,
        req.body.description
    )
    res.json({
        message:true,
        roles
    })
})
}
exports.deleteOneRole = async(req, res, next) =>{



    const roles = await roleInterface.deleteOneRole(req.params.id)

    res.json({
        message:true,
        roles
    })
}
