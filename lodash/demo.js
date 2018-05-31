const _ = require("lodash")
let arr = [1, 2, 3, 4]
//console.log(_.chunk(arr, 2))
var foo = [{
        id: 0,
        name: "aaa",
        age: 33
    },
    {
        id: 1,
        name: "bbb",
        age: 25
    }
]
//_.reject去除数组某个元素
//let out = _.reject(foo, ["id", 0])//[ { id: 1, name: 'bbb', age: 25 } ]

//_.pick根据第二个参数的key,筛选出第一个参数值并返回  **对象方法
// let out = _.pick(foo[0], ["name", "age"]) //{ name: 'aaa', age: 33 }
//返回object所有的keys
//let out = _.keys(foo[0]) //[ 'id', 'name', 'age' ]
//_.cloneDeep 深度拷贝
// let out = _.cloneDeep(foo)
// out[0].id = 3 //不会改变foo的值
//_.find 查找数组
// let out = _.find(foo, ["id", 0])//{ id: 0, name: 'aaa', age: 33 }
//_.keyBy以某主键，将数组转为对象
// let out = _.keyBy(foo, "name") //{ aaa: { id: 0, name: 'aaa', age: 33 },bbb: { id: 1, name: 'bbb', age: 25 } }
//_.filter过滤出符合条件的元素，返回新数组
// let out = _.filter(foo, ["id", 0]) //[ { id: 0, name: 'aaa', age: 33 } ]
//_.map 从集合中挑出一个Key,将其值作为数组返回
// let out = _.map(foo, "name") //[ 'aaa', 'bbb' ]
//_.max/_.min/.sum  最大值/最小值/求和
// let out = _.max(arr)
// let out = _.min(arr)
// let out = _.sum(arr)
//_.pad/_.padStart/_.padEnd两端补齐/开头补齐/末尾补齐
// let out = _.pad(foo[0].name, 5, "-")//-aaa-
// let out = _.padStart(foo[0].name, 5, "-") //--aaa
// let out = _.padEnd(foo[0].name, 5, "-") //aaa--
// 选出json数组中id最大的一项
let out = _.find(foo, ["id", _.max(_.map(foo, "id"))])


console.log(out)