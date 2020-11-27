const dataRouter = require('express').Router();
const xlsx = require('xlsx')

const dataControllers = require('../Controllers/data');

dataRouter.get('/',dataControllers.getDataKaryawan)
// dataRouter.post('/',(req,res)=>
// )

module.exports= dataRouter;
