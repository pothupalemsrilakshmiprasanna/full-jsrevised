


 const register=()=>{
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("please register")
    resolve("successfull")

},3000)

    })
 }
 const login=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("please login")
            resolve("happy")
            
        },1000);
    })
 }

 const thankyou=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("thankyou")
            resolve("your application is submitted")
            
        },1000);
    })
 }



 register().then(login).then(thankyou)



 
