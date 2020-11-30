# API-SigmaTech

## Description
  API to get employee data and prime numbers
  
## Requirements

  * [NodeJs](https://nodejs.org/en/)
  * [Postman](https://www.postman.com/downloads/)

## How to run the app ?
  1. Open app's directory in CMD or Terminal
  2. Type `npm install`
  3. Make new file a called **.env**, set up first [here](#-Set-up-.env-file)
  4. Open Postman desktop application or Chrome web app extension that has installed before
  5. Choose HTTP Method and enter request url.(ex. localhost:5000/data)
  6. You can see all the end point [here](#End-Point)

##  Set up .env file
  Open .env file on your favorite code editor, and copy paste this code below :
  
  ```
  PORT = 5000
  ```
## End Point
**1. GET**
* ```/prima?prima=5 ```
* ```/data```

**2. POST**

* ```/data```
