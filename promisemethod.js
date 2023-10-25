
let promise1=new Promise((resolve,reject)=>{
    reject("promise1")
})

let promise2=new Promise((resolve,reject)=>{
    reject ("promise 2")
})

// Promise.any([promise1,promise2]).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })

// Promise.all([promise1,promise2]).then(result=>console.log(result)).catch(err=>console.log(err))

// Promise.race([promise1,promise2])
// .then(result=>console.log(result))
// .catch(err=>console.log(err))

Promise.allSettled([promise1,promise2])
.then(result=>console.log(result))
.catch(err=>console.log(err))