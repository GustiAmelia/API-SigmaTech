require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const indexRouter = require('./src/Routes/index');

const app = express();

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running at ${process.env.PORT}`);
});

app.get('/',(req,res)=>{
    res.send([1,2,3])
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger("dev"));
app.use(express.static("public"));
app.use(indexRouter);