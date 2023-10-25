

let mypromise=new Promise((resolve,reject)=>{
    let random=Math.random()
    if(random<0.5){
        resolve(random)
    }else{
        reject(new Error("thi is greater"))
    }
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})