let a = 200
let b = 400 
if  (a>b){
    console.log("a is greater")
}
else{
    console.log("b is greater")
}
let c = 2 
if (a%2==0){
    console.log ("c is even")
}
else{
    console.log ("c is odd")
}
let temp = prompt("enter  the temp")
if (temp < 97 && temp > 94 ){
    console.log(" normal ")
}
else if (temp > 97 && temp < 103 ){
    console.log(" fever ")
}
else{
    console.log(" hypothermia")
}
let num1= Number(prompt("enter the first num "))
let num2 =Number( prompt("ente the second num"))
let p = prompt(" ENTER THE ACTION A FOR ADD S FOR SUBTRACT M FOR MULTIPLICATIONA D FOR DIVISION ")
if (p== "a"){
    console.log(num1 + num2)
}
else if (p=="s"){
    console.log(num1 - num2)
}
else if (p=="m"){
    console.log(num1 * num2 )
}
else if (p=="d"){
    console.log(num1 / num2 )
}
else {
    console.log (" wrong action ")
}


//0-12 child 13 -19 teen 20-59 adult 60+ senior 

let age = Number(prompt("enter the age "))
if ( age > 0 && age <= 12 ){
    alert("CHILD")
}
else if (age > 12 && age <= 19 ){
    alert("teenager")
}
else if (age > 19 && age <=59 ){
    alert("adult")
}
else {
    alert("SENIOR")
}
// marks wala ni xa 