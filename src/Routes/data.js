const dataRouter = require('express').Router();
const xlsx = require('xlsx')
const json2xls = require('json2xls');
const fs = require('fs');

const dataControllers = require('../Controllers/data');

dataRouter.get('/',dataControllers.getDataKaryawan)
dataRouter.post('/',dataControllers.postNewData)

module.exports= dataRouter;
