// let hello:string="hello word"
// console.log(hello)
// function Add(left: number) {
//     return (right: number) => {
//         return left + right;
//     }
// }
// const a = Add(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// console.log(a(2));
//接口
// interface Shape {
//     name: string,
//     width: number,
//     height: number,
//     color?: string
// }
// function area(shape: Shape) {
//     let area = shape.width * shape.height;
//     return `我的名字：${shape.name}，面积是${area},颜色是${shape.color}`;
// }
// let Shape = {
//     name: "张三",
//     width: 10,
//     height: 10,
//     color: "red"
// }
// document.body.innerHTML = area(Shape);
//class
// interface Shape {
//     name: string,
//     sex?: boolean
// }
// class Parent {
//     constructor(shape: Shape, age: number = 12, ...res) {
//         let { name, sex } = shape;
//         this.setHtml(res)
//     }
//     private setHtml(res) {
//         const tent = document.getElementById("content");
//         const list = res.map(item => `<div class="lis">${item}</div>`);
//         let lis = '';
//         for (let i of list) {
//             lis += i;
//         }
//         tent.innerHTML = lis;
//         // addEvent("#content")("click", ".lis", function (el) {
//         //     console.log(el.target.innerHTML)
//         // })
//         addEvent(".lis")("click", function () {
//             console.log("3")
//         })
//     }
//     setClick() {
//     }
// }
// const shape = {
//     name: "张三",
//     sex: true
// }
// const age = 11
// new Parent(shape, age, 1, 2, 3, 4, 5)
// function addEvent(ele: string, ) {
//     let obj;
//     console.log(ele.charAt(0))
//     if (ele.charAt(0) === "#") {
//         let str = ele.substr(1);
//         obj = document.getElementById(str);
//         console.log("2")
//     } else {
//         obj = document.querySelectorAll(ele);
//     }
//     if (window.addEventListener) {
//         return function (type: string, ...rest) {
//             console.log(rest)
//             if (typeof rest[0] === 'string') {
//                 if (typeof rest[rest.length] === "boolean") {
//                     if (obj.length > 1) {
//                         for (let item of obj) {
//                             item.addEventListener(type, rest[0], rest[1], rest[rest.length]);
//                         }
//                     } else {
//                         obj.addEventListener(type, rest[0], rest[1], rest[rest.length]);
//                     }
//                 } else {
//                     obj.addEventListener(type, rest[0], rest[1], false);
//                 }
//             } else {
//                 if (obj.length > 1) {
//                     for (let item of obj) {
//                         item.addEventListener(type, rest[0], rest[rest.length]);
//                     }
//                 } else {
//                     obj.addEventListener(type, rest[0], rest[rest.length]);
//                 }
//             }
//         }
//     } else {
//     }
// }
// interface Parent {
//     readonly id: number;
//     name: string;
//     age?: string;
//     [a: string]: any;
//     (name: string, age: number): string | number
// }
// let obj = {
//     id: 1,
//     name: 'tom',
//     age: 22,
//     arr: ["中航三", "jsoi"],
//     fn: (name: string) => (age: number): string | number => `我的名字是${name}，今年${age}`
// }
// console.log(obj.fn(obj.name)(obj.age));
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
// 存取器
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return 'Jack';
//     }
//     set name(value) {
//         console.log('setter: ' + value);
//     }
// }
// let a = new Animal('Kitty'); // setter: Kitty
// a.name = 'Tom'; // setter: Tom
// console.log(a.name); // Jack
//静态方法
// class Animal {
//     static isAnimal(a) {
//         return a instanceof Animal
//     }
// }
// let a = 'jack'
// Animal.isAnimal(a);
//抽象类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log(name);
    };
    return Cat;
}(Animal));
var c = new Cat();
console.log(c.sayHi());
console.log(name);
console.log(c);
