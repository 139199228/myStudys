// let hello:string="hello word"
// console.log(hello)
// function Add(left: number) {
//     return (right: number) => {
//         return left + right;
//     }
// }
// const a = Add(10);
var obj = {
    id: 1,
    name: 'tom',
    age: 22,
    arr: ["中航三", "jsoi"],
    fn: function (name) { return function (age) { return "\u6211\u7684\u540D\u5B57\u662F" + name + "\uFF0C\u4ECA\u5E74" + age; }; }
};
console.log(obj.fn(obj.name)(obj.age));
// let tom: Parent = {
//     name: "tom",
//     age: "12",
//     qitaName: 'moty'
// }
// console.log(tom)
// let tom: Parent = {
//     id: 1,
//     name: "tom",
//     age: "12",
//     qitaName: 'moty'
// }
// console.log(tom.id)
// console.log(tom)
