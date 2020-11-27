const primeModels = require('../Models/prima');
const formResponse = require('../Helpers/Form/formResponse');

const primeControllers ={
  getPrime : (req,res)=>{
    primeModels
    .getPrime(req.query)
    .then((results)=>{
      formResponse.success(res,results,200)
    })
    .catch((error)=>{
      formResponse.err(res,error,500)
    })
  }
}

module.exports = primeControllers;