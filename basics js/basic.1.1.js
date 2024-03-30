
let student=["anil","banti","suresh","mahesh","girish"]


let students=["anil","banti","suresh","mahesh","girish"]



// index of  -- returns the first index if found else -1
var newstudent=students.indexOf("satish")
if(newstudent===-1){
  students.push("satish")
}
document.write(students+"<br>");


// for each method - index along item
let scor = [10, 20 ,30 ,40 ,50 ,60];
let mystudents = [" suresh ", "murali", "nagaraju" ,"harish"]

mystudents.forEach(function(item,index)  {
    document.write(index+item+"</br>")

})  



let mstudents=["anil","sunil","banti"]
document.write(mstudents[2]+"<br>")


let mark=[
   [10,20,30,40],
    [50,60,70,80],
   [90,100,43],
  [32,35]
]
document.write(mark[1][1])


//string methods
//split() trim() char at() substring() replace() to uppercase() tolowercase()
var sample="this is string sample test"
document.write(sample.split(" "));

var studen="ramesh is a very good boy";
document.write(studen);
console.log(studen.trim())
document.write(studen.substring(1,4));

//looping statements


for(a=5;a<=10;a++){
    document.write(a+"."+"l love india"+"</br>")
}

let x=0;
while(x<=10){
    document.write( x+"."+"hello everyone"+"</br>")
    x++;
}


let y=21;
do {
document.write("this is do-while statement")
y++;
}while(y>20)

