const primeModels ={
  getPrime : (query)=>{
    return new Promise ((resolve,reject)=>{
      const isPrime = (n)=>{
        if(n<=1){
          return false
        }
        else{
          for(let i = 2; i<=Math.sqrt(n);i++){
            if(n % i === 0){
              return false
            }
          }
          return true
        }
      }
      
      const bilanganPrima = (n)=>{
        let prima = []
        for(let i = n+1; prima.length<20;i++ ){
          if(isPrime(i)){
            prima.push(i)
          }
        }
        return prima
      }
      
      resolve(bilanganPrima(Number(query.prima)))
      
    })
  }
}

module.exports = primeModels;