//PACKAGE IMPORT
const express = require("express");
const xlsx = require('xlsx');

//FILEPATH IMPORT
const primaRouter = require('./prima');
const dataRouter = require('./data');

//DEKLARASI
const indexRouter = express.Router();

//IMPLEMENTASI
indexRouter.use('/prima',primaRouter);
indexRouter.use('/data',(req,res)=>{
  const wb = xlsx.readFile('Data.xlsx')
  res.send(xlsx.utils.sheet_to_json(wb.Sheets['Data Karyawan']))
})

//EXPORTS
module.exports = indexRouter;