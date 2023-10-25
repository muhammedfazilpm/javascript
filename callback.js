

function task(callback){
    setTimeout(()=>{
        console.log("task completed")
        callback()
    },1000)
    
}

function calbacks(){
    console.log("call back completed")
}

task(calbacks)