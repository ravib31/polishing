/*function greeting(){
    console.log("Pranam Sir")
}
greeting()


const num = 2;
const function1 = function(){
    console.log("Pranam Sir")
}

console.log(typeof function1);/*variable function1 is also a function thats why we can call this function directly to see the output*/
// function1() //output: Pranam Sir

/*
const obj1={
    name:"Pranam",
    age:24,
    greet:function(){
        console.log("Hello")
    }
}
obj1.greet() //output: Hello

function display(par){
    console.log(par)
}   
display(2) //output: 2

function display1(par){
    par()
}
display1(function () {
    console.log("Display2") //output: Hello
})
*/

// setTimeout(function () {
//   console.log("Hello Timeout");
// }, 3000);

// setInterval(function () {
//   console.log("Hello Interval");
// }, 3000)

// [
//     'makeDinner','washDishes','watchTV'
// ].forEach((value,length)=> {
//     if(value==="washDishes") return
//     console.log(value,value.length)
// })

// const regularFunction = function(){
//     console.log("Regular function")
// }
// const arrowFunction = ()=>{
//     console.log("Arrow function")
// }
// arrowFunction()

// const obj2={
//     methhod1:function(){
//         console.log("This is shorthand method")
//     },
//     method2:()=>{
//         console.log("Arrow method")
//     }
// }

// const buttonElement = document.querySelector('.jsButton');
// buttonElement.addEventListener('click',()=>{
//     console.log("Button clicked")
// });

// buttonElement.removeEventListener('click',()=>{
//     console.log("Button remove clicked")
// })


console.log([1,-3,5].filter((value,index)=>{
    return value>0;
}))

console.log([2,3,4].map(value =>  value*2
));