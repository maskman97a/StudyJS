var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm cách dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích
//a-- khi đó a sẽ vẫn nhận giá trị = 10
//b++ khi đó b vẫn nhận giá trị  = 18
//++b khi đó b sẽ nhận giá trị 18 và sau đó + thêm 1 đơn vị do b++ ở
//trên và tiếp tục + thêm 1 đơn vị nữa là 20
//++a khi đó a đã bị trừ đi 1 đơn vị a lúc ấy sẽ là 9 và sau đó thực
//hiện + thêm 1 đơn vị là nhận giá trị 10
//kết quả x = 10 + 18 - 20 - 10 = -2