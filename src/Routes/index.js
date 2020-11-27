//PACKAGE IMPORT
const express = require("express");

//FILEPATH IMPORT
const primaRouter = require('./prima');
const dataRouter = require('./data');

//DEKLARASI
const indexRouter = express.Router();

//IMPLEMENTASI
indexRouter.use('/prima',primaRouter);
indexRouter.use('/data',dataRouter)

//EXPORTS
module.exports = indexRouter;