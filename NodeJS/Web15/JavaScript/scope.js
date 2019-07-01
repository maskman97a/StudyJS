// c = 5;
// var a = 6;

// function showB(){
//     var b = 10;
    
//     console.log(a); //6
//     console.log(b); //10
// }

// showB();

// console.log(a); //6
// console.log(global.c);//5
// console.log(b); //undefined

//khai bao
// function functionName(){
//     console.log("print functionName")
// }

// const functionName2 = function (){
//     console.log("print functionName2")
// }

// const functionName3 = () => {
//     console.log("print functionName3")
// }

// //chay
// functionName();
// functionName2();
// functionName3();

// const -> let -> var
// console.log("3s sau may tinh se chao ban!");
// setTimeout(function(){
//     console.log("1");
// }, 1000)
// setTimeout(function(){
//     console.log("2");
// }, 2000)
// setTimeout(function(){
//     console.log("3");
// }, 3000)
// setTimeout(function(){
//     console.log("Hello!!!");
// }, 4000)

// const countDown = function(count){
//     for (let i = count; i>0;i--){
//         setTimeout(function(){
//             console.log(i);
//         },1000*(count - i));
//     }
//     if (i = 1){
//         console.log("Hello");
//     }
// }
// countDown(5);

//function scope

// function parentFunction(){
//     var a = 3;

//     if(1+1==2){
//         var b= 15;
//     }

//     function childFunction(){
//         var c = 10;
//         console.log(c); //10
//     }

//     childFunction();

//     console.log(a); //3
//     console.log(b); //15
//     console.log(c); //undefined
// }
// parentFunction();

// -> thang con lay duoc cua cha nhung cha ko lay duoc cua con

//let: Block scope {}

function parentFunction(){
    let a = 3;

    if(1+1==2){
        let b = 15;
    }

    function childFunction(){
        let c = 10;
        console.log(c); //10
    }

    childFunction();

    console.log(a); //3
    console.log(b); //undefined
    console.log(c); //undefined
}
// parentFunction();

// -> thang con lay thang con, thang cha lay thang cha

// console.log("Start");
// setTimeout(function(){
//     console.log("wait 1s!");
// },1000);
// console.log("End");

// function as a object

// function aRose(){
//     console.log("hello!");
// }

// var anotherName = aRose;
// typeof(anotherName)//"function"
// anotherName();"Hello!"

const print = function (i){
    console.log(i);
}

const otherFunction = function (functionAsAnObject){
    functionAsAnObject(15);
}

otherFunction(print);

// var printResult = parentFunction;
// typeof(parentFunction)
// printResult();





