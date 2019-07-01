// aFunction("Huy!");

// function aFunction(a) {
//     console.log("Hello "+a);
// }

// var bFunction = function(name, printName) {
//     printName(name);
// }

// bFunction("Huy", aFunction);

//Callback

// function add5(getNumber, printNum) {
//     var num = getNumber() + 5;
//     printNum(num);
// }

// function randomNumber() {
//     return Math.floor(Math.random()*1000);
// }

// function printNumber(num) {
//     console.log(num);
// }

// add5(randomNumber, printNumber);

// setTimeout(function() {
//     add5(randomNumber, printNumber);
// }, 1000*1);

// console.log("Ahihi");

// console.log("Ahihi");

// console.log("Ahihi");

// console.log("Ahihi");

// var cFunction = () => {
//     console.log("Hello Arrow!");
// }

//Function scope

// var a = 10;

// function abc() {
//     var b = 15;

//     function abcd() {
//         var c = 25;

//         console.log(a); // 10
//         console.log(b); // 15
//         console.log(c); // 25
//     }

//     abcd();
    
//     console.log(a); // 10
//     console.log(b); // 15
//     console.log(c); // undefined
// }

// abc();
    
// console.log(a); // 10
// console.log(b); // null

// function printNum(num, waitTime) {
//     setTimeout(function() {
//         console.log(num);
//     }, waitTime*1000);
// }

// function countDown(num) {
//     var i = num;
//     for(i; i >= 0;i--) {
//         // i == -1
//         printNum(i, num-i);
//     }
// }

//Block scope {  }
var b = 10;

function countDown(num) {
    c = 25;
    for(let i=num; i >= 0;i--) {
        setTimeout(function() {
            console.log(i);
        }, (num-i)*1000);
    }
}

countDown(5);

//5
//4
//3
//2
//1
//0