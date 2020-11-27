const primaRouter = require('express').Router();

const primeControllers = require('../Controllers/prima');

primaRouter.get('/',primeControllers.getPrime)

module.exports = primaRouter;
