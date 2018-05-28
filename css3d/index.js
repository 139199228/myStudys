Object.prototype.a = 1000;

function test() {
    this.a = 1
}
test.prototype.geta = function () {
    return this.a
}
var p = new test;
console.log(p.geta())
// var arr  = ["02","04","06"]
// var c = arr.indexOf("08")
// console.log(c)


// var a = {
// 	id:"1"
// }
// var b = Object.assign({},a)
// b.id = 4
// console.log(a)
// console.log(b)