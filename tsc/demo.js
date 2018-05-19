// let hello:string="hello word"
// console.log(hello)
// function Add(left: number) {
//     return (right: number) => {
//         return left + right;
//     }
// }
// const a = Add(10);
var Parent = /** @class */ (function () {
    function Parent(shape, age) {
        if (age === void 0) { age = 12; }
        var res = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            res[_i - 2] = arguments[_i];
        }
        var name = shape.name, sex = shape.sex;
        this.setHtml(res);
    }
    Parent.prototype.setHtml = function (res) {
        var tent = document.getElementById("content");
        var list = res.map(function (item) { return "<div class=\"lis\">" + item + "</div>"; });
        var lis = '';
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var i = list_1[_i];
            lis += i;
        }
        tent.innerHTML = lis;
        // addEvent("#content")("click", ".lis", function (el) {
        //     console.log(el.target.innerHTML)
        // })
        addEvent(".lis")("click", function () {
            console.log("3");
        });
    };
    Parent.prototype.setClick = function () {
    };
    return Parent;
}());
var shape = {
    name: "张三",
    sex: true
};
var age = 11;
new Parent(shape, age, 1, 2, 3, 4, 5);
function addEvent(ele) {
    var obj;
    console.log(ele.charAt(0));
    if (ele.charAt(0) === "#") {
        var str = ele.substr(1);
        obj = document.getElementById(str);
        console.log("2");
    }
    else {
        obj = document.querySelectorAll(ele);
    }
    if (window.addEventListener) {
        return function (type) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            console.log(rest);
            if (typeof rest[0] === 'string') {
                if (typeof rest[rest.length] === "boolean") {
                    if (obj.length > 1) {
                        for (var _a = 0, obj_1 = obj; _a < obj_1.length; _a++) {
                            var item = obj_1[_a];
                            item.addEventListener(type, rest[0], rest[1], rest[rest.length]);
                        }
                    }
                    else {
                        obj.addEventListener(type, rest[0], rest[1], rest[rest.length]);
                    }
                }
                else {
                    obj.addEventListener(type, rest[0], rest[1], false);
                }
            }
            else {
                if (obj.length > 1) {
                    for (var _b = 0, obj_2 = obj; _b < obj_2.length; _b++) {
                        var item = obj_2[_b];
                        item.addEventListener(type, rest[0], rest[rest.length]);
                    }
                }
                else {
                    obj.addEventListener(type, rest[0], rest[rest.length]);
                }
            }
        };
    }
    else {
    }
}
