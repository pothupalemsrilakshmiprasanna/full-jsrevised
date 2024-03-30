
//destructing
const samplenumbers=[1,2,3,4,5,6,7,8,9,"mahesh"]
const [one,two,three,apple,mangoes,fruit,nanna,pinni,nine,ten]=samplenumbers
document.write("my name is:",ten+"<br>")

const fullnam={
    fname:"suman",
    lname:"kalyan"
}
const {fname,lname}=fullnam
document.write(fname,lname)
/*
asnchronous --execute code1 code2 code4 code5 code3 
call backs
callbackhell
promises
async/await
higher order functions
method chaining
synchronous--code1 code2
*/
// higher order functions
console.log("welcome");
const register=(apple)=>{// call back
    setTimeout(()=>{
        console.log("please register");
    apple()
    }, 5000)
    
    }
 const login=(mango)=>{
    setTimeout(()=>{
        console.log("please login")
        mango()
    }, 3000)
    
 }

 const thankyou=()=>{
    setTimeout(() =>{
      console.log("thankyou")  
    }, 1000)

 }



 register(function(apple){//  call back hell
     

     login(function(){

        thankyou()
     })


 })















