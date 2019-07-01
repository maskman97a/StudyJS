/**
 * Cách sử dụng Array và Object khác nhau như thế nào. Viết câu trả lời ở phía dưới.
 */

//Array
var a = [];
var n = 5;
for(var i = 1; i<=n; i++){
  a[i] = i;
  console.log('a' + i + ' = ' + a[i]);
}

//Object
var student1 = {
  name:'tung',
  age:22,
  sex:true
}

var student2 ={
  name:'tuan',
  age:15,
  sex:true
}

//Đưa object vào array
var student = [student1, student2];
console.log(student);
//=> Object dùng để lưu thông tin của một đối tượng
//=> array để chứa thông tin của nhiều object