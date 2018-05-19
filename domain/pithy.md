###javascript 精粹
-  label statement
```	{a:1}  //返回值1 
	{a:1,b:2}//报错
	！function(){}()//操作符后面表达式的原理  要求表达式执行
```

- 高级函数睡吧函数当做参数或者返回值的函数
```	[1,2,3,4].forEach(function(item){
		return item;
	})
函数式编程的优点应该跟指令式编程每句都有执行结果（比如操作DOM`var a=1；var b=2;var c=a+b`）,函数式变成fs=y,函数编程有一个很大的要求：确定的输入肯定会得到确认的输出。
 ```
 - 闭包
 1、函数
 2、环境：函数创建时作用域的局部变量

-柯里化
 一种允许使用部分参数生成函数的方式
 ```
 function isType(type){
	return function(obj){
		return Object.prototype.toString.call(obj) === `[object ${type}]`;
	}
 }
var isNumber= isType(‘Number’);
console.log(isNumber(1));
console.log(isNumber("s"));

var isArray = isType("Array");
console.log(isArray(1));
console.log(isArray([1,2,3]));
==============================
function f(n){
	return n*n;
}
function g(n){
	return n*2;
}
console.log(f(g(5)));//不便于理解 

function pipe(f,g){
	return function(){
		return f.call(null,g.apply(null,arguments));
	}
}
var fn = pipe(f,g)
console.log(fn(5));
 ```
- 尾递归
1、尾调用是指某个函数的最后一步是调用后另一个函数
2、函数调用自身，称为递归
3、如果尾调用自身，就称为尾递归
递归很如意发生’栈溢出‘错误
```
function factorial(n){//递归
	if(n===1)return 1;
	return n*factorial(n-1);	
}
//但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生“栈溢出”错误
function factorial(n,total){//递归
	if(n===1)return total;
	return factorial(n-1,n*total);	
}
factorial(5,1)
//柯里化减少参数
function currying(fn,n){
	return function(m){
		return fn.call(this,m,n)
	}
}
function tailFactorial(n,total){
	if(n===1)return total;
	return tailFactorial(n-1,n*total)
}
const factorial=currying(tailFactorial,1);
factorial(5)
//反柯里化
Function.prototype.uncurry=function(){
	return this.call.bind(this)
}
push 通用化
var push = Array.prototype.push.uncurry()
var arr=[];
push(arr,1)
push(arr,2)
push(arr,3)
console.log(arr)
```
