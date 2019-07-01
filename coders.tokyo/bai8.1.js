var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.

//Vì --a thì a sẽ lập tức nhận giá trị = a-1 = 9
//Sau đó a++ thì a vẫn giữ nguyên giá trị là = 9
//Khi đó x = 9 + 9 = 18;
