// console.log("Hello");

// function onLoad(){
//     console.log(document.getElementById('title'));
// }
// const questionContentElem = document.getElementById('questionContent');
// const remainCharElem = document.getElementById('remain');
// const maxLength = 200;

// questionContentElem.addEventListener(
//     'input',
//     function(){
//         // console.log("keyup");
//         var remainChar = maxLength - questionContentElem.value.length;
//         remainCharElem.innerHTML= remainChar;
//     }
// );

axios.get("http://localhost:4400/randomquestion")
.then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });