const companyInterface = require('../interface/company')

const { handleRequest } = require('../utlis/requestValidator')


exports.createCompany = async (req,res,next) => {
    handleRequest(req, next, async () => {
  
      const company = await companyInterface.createCompany(
          req.body.name,
          req.body.phone,
          req.body.email,
          req.body.address
      )
  
      return res.json({
          message:true,
          company
      })
    })
}  

exports.getCompany = async(req, res, next) =>{
    handleRequest(req, next, async () => {

    const company = await companyInterface.getCompany(
        req.query.search,
        req.query.page,
     )

    res.json({
        message:true,
        company
    })
})

}


exports.getOneCompany = async(req, res,next) =>{
    handleRequest(req, next, async () => {


    const company = await companyInterface.getOneCompany(req.params.id)

    res.json({
        message:true,
        company
    })
})
}


exports.updateCompany = async(req, res, next) =>{
    handleRequest(req, next, async () => {

    const company = await companyInterface.updateCompany(
          req.params.id,
          req.body.name,
          req.body.phone,
          req.body.email,
          req.body.address
    )
    res.json({
        message:true,
        company
    })
})
}

exports.deleteOneCompany = async(req, res, next) =>{



    const company = await companyInterface.deleteOneCompany(req.params.id)

    res.json({
        message:true,
        company
    })
}

exports.getCompanyJobPos = async(req, res) =>{


    const company = await companyInterface.getCompanyJobPos(req.params.id)

    res.json({
        message:true,
        company
    })
}



