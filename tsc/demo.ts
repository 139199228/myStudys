// let hello:string="hello word"
// console.log(hello)
// function Add(left: number) {
//     return (right: number) => {
//         return left + right;
//     }
// }
// const a = Add(10);

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

interface Shape {
    name: string,
    sex?: boolean
}
class Parent {
    constructor(shape: Shape, age: number = 12, ...res) {
        let { name, sex } = shape;
        this.setHtml(res)
    }
    private setHtml(res) {
        const tent = document.getElementById("content");
        const list = res.map(item => `<div class="lis">${item}</div>`);
        let lis = '';
        for (let i of list) {
            lis += i;
        }
        tent.innerHTML = lis;
        // addEvent("#content")("click", ".lis", function (el) {
        //     console.log(el.target.innerHTML)
        // })
        addEvent(".lis")("click", function () {
            console.log("3")
        })
    }
    setClick() {

    }
}
const shape = {
    name: "张三",
    sex: true
}
const age = 11
new Parent(shape, age, 1, 2, 3, 4, 5)
function addEvent(ele: string, ) {
    let obj;
    console.log(ele.charAt(0))
    if (ele.charAt(0) === "#") {
        let str = ele.substr(1);
        obj = document.getElementById(str);
        console.log("2")
    } else {
        obj = document.querySelectorAll(ele);
    }
    if (window.addEventListener) {
        return function (type: string, ...rest) {
            console.log(rest)
            if (typeof rest[0] === 'string') {
                if (typeof rest[rest.length] === "boolean") {
                    if (obj.length > 1) {
                        for (let item of obj) {

                            item.addEventListener(type, rest[0], rest[1], rest[rest.length]);
                        }
                    } else {
                        obj.addEventListener(type, rest[0], rest[1], rest[rest.length]);

                    }
                } else {

                    obj.addEventListener(type, rest[0], rest[1], false);

                }
            } else {
                if (obj.length > 1) {
                    for (let item of obj) {
                        item.addEventListener(type, rest[0], rest[rest.length]);

                    }
                } else {
                    obj.addEventListener(type, rest[0], rest[rest.length]);
                }
            }

        }
    } else {

    }
}
function func() {
    if (rest.length > 3) {

    }
}