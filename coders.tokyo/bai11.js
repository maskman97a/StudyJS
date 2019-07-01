/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */
var rectangle = {
    width: 3,
    height: 4
}
function getWidth(a) {
    var width = a.width;
    return width;
}
var width = getWidth(rectangle);
console.log('width = ' + width);

function getHeight(a) {
    var height = a.height;
    return height;
}
var height = getHeight(rectangle);
console.log('height = ' + height);

function getArea(a, b) {
    var s = a * b;
    return s;
}
var area = getArea(width, height);
console.log('area = ' + area);