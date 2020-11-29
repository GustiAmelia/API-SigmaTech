const xlsx = require('xlsx');
const json2xls = require('json2xls');
const fs = require('fs');

const dataModels ={
  getDataKaryawan :()=>{
    return new Promise((resolve,reject)=>{
      const data = xlsx.readFile('Data.xlsx')
      resolve(xlsx.utils.sheet_to_json(data.Sheets['Sheet 1']))
    })
  },
  postNewData : (body)=>{
    return new Promise ((resolve,reject)=>{
      const wb = xlsx.readFile('Data.xlsx')
      const ws = xlsx.utils.sheet_to_json(wb.Sheets['Sheet 1'])
      const data = {
      id : Number(ws[ws.length - 1].id) + 1,
      email: body.email,
      first_name : body.first_name,
      last_name : body.last_name,
      avatar : body.avatar,
      }
      ws.push(data)
      let inputData = json2xls(ws)
      resolve(fs.writeFileSync('Data.xlsx', inputData, 'binary'))
    })
  }
}

module.exports=dataModels;