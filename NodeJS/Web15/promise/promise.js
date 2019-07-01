// const promiseExp = () => new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve('trả tiền');
//     }, 5000);
//     setTimeout(function () {
//         resolve('bố éo trả');
//     }, 3000);
// });

// promiseExp()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("Error: ", err);
//     });

const muaRau = (money) => new Promise((resolve, reject) => {
    if (money >= 10000) {
        resolve("đủ tiền!");
    } else reject("Đéo. có cửa mua nha!")
});

const anRau = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("An xong rồi!");
    }, 2000);
});

// muaRau(11111)
//     .then((response) => {
//         console.log(response);
//         return anRau();
//     })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((err) => {
//         console.log(err);
//     })

    const asyncFunction = async ()=>{
        console.log("Bắt đầu mua rau");
        await muaRau(11000);
        console.log("Mua rau xong rồi!")
        await anRau();
        console.log("Ăn rau xong!")
    }

    asyncFunction();