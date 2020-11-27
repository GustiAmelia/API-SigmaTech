const xlsx = require('xlsx');

const dataModels ={
  getDataKaryawan :()=>{
    return new Promise((resolve,reject)=>{
      const data = xlsx.readFile('Data.xlsx')
      resolve(data.Sheets['Data Kawryawan'])
    })
  }
}

module.exports=dataModels;