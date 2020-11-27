const dataModels = require('../Models/data');
const formResponse = require('../Helpers/Form/formResponse');

const dataControllers ={
  getDataKaryawan : (req,res)=>{
    dataModels
    .getDataKaryawan()
    .then((results)=>{
      formResponse.success(res,results,200)
    })
    .catch((error)=>{
      formResponse.err(res,error,500)
    })
  }
}

module.exports=dataControllers;