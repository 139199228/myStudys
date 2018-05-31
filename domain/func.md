	//1.面向过程的 想到哪写到哪
	//2.面向对象的 共有的属性和方法封装到一个类里 封装
	//3.面向切面编程 统计一个函数执行的时间
	//4.函数式编程 提纯无关于业务的纯函数  函数套函数产生神奇的效果
	//5.函数式编程不是用函数来编程 函数套函数让函数更强大 OOP
	//6.javascript函数称为一等公民 
	//7.es3 ->es5->es6
	//8.对于函数式编程来讲 同样的输入一定会有同样的输出 永远不依赖于外部的状态
	//9.纯函数可以记忆哦（同样的输入总有同样的输出） 不跟外界有任何关系 抽象代码方便单元测试
	//10.函数式编程 新建一个独立的js 通过代码的提纯 新建共有的common.js->libs 本项目
	//11.函数的柯里化函数 函数接受一堆参数->返回一个新函数 继续接受参数能够处理逻辑
	//12.他可以记住参数，相当于对参数的一种缓存
	//13.函数组合是为了解决柯里化函数所最后生成的洋葱样的代码
	//14.组合函数相当于把一页页的洋葱贴起来
	//15.一目了然和系统提供的api保持一致  还有一点不要去生成那些转瞬即逝的代码
	//16.声明式的代码越来越受到欢迎 只要提供一条条的指令 程序就知道怎么做而不是一步步的告诉 var i=0
	//17.惰性函数就是比较懒得函数 下一次不想再求值了
	//18.函数传给函数 让函数具有更复杂的能力和功能
	//19.尾部递归的性能要高于传统纯函数递归的性能
	//20.函数式变成其实就是函数的种种核心技巧的拼接，但是函数式 编程会充盈着大量的闭包。闭包呢是JS中常见的核心知识
	//21.常用的函数式编程的库 RxJS cycleJS lodashJS underscoreJS  ramdajs
	//22.抽象业务逻辑 系统里有很多可以复用 组合起来有更强大的功能额的时候 抽库 代码健壮 “单元测试！！！！！”
	//23.函数式编程的唯一影响因素就是输入和输出
	//24.nodejs js多线程 每一个函数式编程里面 根本不涉及到外部的那个被几个线程争执的变量
	//25.范畴代表一个容器，容器内部有两种因素组成 一个value 一个是变形关系 变形关系也是函数这个变形关系只能作用于单独的该容器下面的一个元素 但是范畴和范畴之间可以相互转化 用到的也是变形函数 但是这个变形函数非常的特殊，因为它能作用于当前容器的每一个元素。他有一个特殊的名字 函子，随着计算机的发展历程，产生了很多函子。这些函子本身都是数学方法，后来被依次利用到函数式编程中。
	//26.本来一个容器不能调用自身的函数 函子可以  容器只留一个接口 map 可以运行容器内的函数
	//A  ->map  map<- B 容器包含value和变形关系，容器有个方法叫map，可以访问容器内很多方法。
	//27.一个容器一旦接受了 变形关系 接受一个函子 接受一个函数 就变成了一个新的容器
	//28.函子    容器 ->(值 变形关系) 普通的容器 map  函子 它的变形关系可以作用每一个值 将当前容器转换成另一个容器
	//29.加一层容错机制Maybe  代表着传统编程中的if Either因子已右侧为
	//30.AP因子的函数执行 普通函子的value 也可以实现链式调用
	//31.Monad 函子的作用是，总是返回一个单层的函子。实现I/O 是不纯的操作


###范畴与容器（函数式编程于OOP(面向对象编程的区别)：面向对象是父子之间的调用关系，子继承父。而函数式编程是兄弟关系，你调用我，我调用你，函数里面互相调用，两种思路不一样）
	1、我们可以把“范畴”想象成一个容器，里面包含两样东西，值（value）,值的变形关系，也就是函数。
	2、范畴论使用函数，表达范畴之间的关系
	3、伴随着范畴论的发展，就发展出一整套函数的运算方法。这套方法起初只用于数学运算，后来有人将它在计算机上实现了，就编程了今天的函数式编程
	4、本质上，函数式编程只是范畴论的计算方法，跟数学逻辑、微积分、行列式是同一个东西，都是数学方法，只是它碰巧能用来写程序。为什么函数式编程要求函数必须是纯的，不能有副作用？因为它是一种数学运算，原始目的就是求值，不做其他事，否则就无法满足函数运算法则了。
	- 范畴与容器
		1、函数不仅仅可以用于同一个范畴之中的值转换，还可以用于将一个范畴转成另一个范畴，这就涉及到了函子（functor）
		2、函子是函数式编程里面最重要的数据类型，也是最基本的运算单位和功能单位。它首先是一种范畴，也就是说，是一个容器，包含了值和变形的关系。比较特殊的是，它的变形关系可以依次作用于每一个值，将当前容器变形成另一个容器。
	- 容器、Functor(函子)
		$(...)返回的对象并不是一个原生的DOM对象，而是对于原生对象的一种封装，这种封装，在某种意义上就是一个‘容器’（但它并不是函数式）
		functor(函子)最守一些特定规则和容器类型。
		functor是一个对于函数调用的抽象，我们赋予容器自己去调用函数的能力，把东西装进一个容器，只留出一个接口map给容器外的函数，map一个函数时，我们让容器自己来运行这个函数	，这样容器就可以自己地选择何时何地如何操作这个函数，以致于拥有惰性求值，错误处理，异步调用等等，非常牛的特性
		```
			var Container=function(value){
				this.__value = value
			}
			//函数式编程一般约定，函子有一个of方法
			Container.of=(x)=>(new Container(x))//Container.of('aaa')
			
			//一般约定，函子的标志就是容器具有map方法。该方法将容器里的每一个值，映射到另一个容器
			Container.prototype.map=function(f){
				return Container.of(f(this.__value))
			}
			Container.of(2)
				.map(x=>x+1)//Container(3)
				.map(x=>console.log("x的值为",x))//Container("x的值为3")
		```
		
	- 函子的代码实现
		1、任何具有map方法的数据结构，都可以当做函子的实现。
	- map 
		下面代码，Functor是一个函子，它的map方法接受函数f作为参数，然后返回一个新的函子，里面包含的值是被f处理过的f(this.val)。
		一般约定，函子的标志就是容器具有map方法。该方法将容器里的每一个值，映射到另一个容器。
		下面的例子说明，函数式编程里面的运算，都是通过函子完成，即运算不直接针对值，而是针对这个值的容器---函子。函子本身具有对外接口（map方法），各种函数就是运算符，通过接口接入容器，引发容器里面的变形。
		因此，学习函数式编程，实际上就是学习函子的各种运算，由于可以把运算方法封装在函数里面，所以有衍生出各种不同类型的函子，有多少种运算，就有多少种函子。函数式编程就变成了运用不同的函子，解决实际问题。
		```
			class Functor{
				constructor(val){
					this._val=val
				}
				map(f){
					return new Functor(f(this._val))
				}
			}
			(new Functor(3)).map(x=>x+1)//Functor(4)
		```
	- of方法
		你可能注意到了，上面生成新的函子的时候，用了new命令。这实在是太不像函数式变成了，因为new命令是面向对象函数的标志。
		函数式编程一般约定，函子有一个of方法，用来新生成的容器。
	```
		Functor.of=function(x){
			return new Functor(x)
		}
		Functor.of(2).map(x=>x+1)//Functor(3)
	```
	- maybe函子
		函子接受各种函数，处理容器内部的值，这里就有一个问题，容器内部的值可能是一个空值（null），而外部函数未必有处理空值的机制，如果传入空值，很可能就会出错。
	```
		Functor.of(null).map(x=>x.toUppercase())//TypeError
		class Maybe extends Functor{
			map(f){
				return this._val?Maybe.of(f(this._val)):Maybe.of(null)
			}
		}
		Maybe.of(null).map(x=>x.toUppercase())//Maybe(null)
	```
	```
		var Maybe = function(val){
			this.val = val;
		}
		Maybe.of=function(x){
			return new Maybe(x)
		}
		Maybe.prototype.map=function(f){
			return isNothing()?Maybe.of(f(this.val)):Maybe.of(null)
		}
		Maybe.prototype.isNothing=function(){
			return (!this.val == null)
		}
	```
	- 错误处理、Either
	1、我们的容器能做的事情太少了，try/catch/throw并不是‘纯’的。因为它从外部接管了我们的函数，并且这个函数出错时抛弃了它的返回值。
	Promise是可以调用catch来集中处理错误
	事实上Either并不只是来处理错误的，它表示了逻辑或，范畴学里的coproduc
	- Either
	条件运算符if...else是最常见的运算之一，函数式编程里面，使用Either函子表达。Either函子内部有两个值：左值（left）和右值（right）。右值是正常情况下使用的值，左值是右值不存在的时候使用的默认值。
	```
		class Eitch extends Functor{
			constructor(left,right){
				this.left = left;
				this.right = right;
			}
			map(f){
				reutrn this.right?
				Eitch.of(this.left,f(this.right)):
				Eitch.of(f(this.left),this.right)
			}
		}
		Eitch.of = function(left,right){
			return new Eitch(left,right)
		}
		var addOne=function(x){
			return x+1
		}
		Eitch.of(5,6).map(addOne)//Eitch(5,7)
		Eitch.of(5,null).map(addOne)//Eitch(6,null)
		Eitch.of({address:"xxx"},currentUer.address).map(updateField)//代替try...catch
	```
	```//错误处理、Eitch
		var Left = function(x){
			this.__value = x
		}
		var Right = function(x){
			this.__value = x
		}
		Left.of=x=>(new Left(x));
		Right.of=x=>(new Right(x));
		Left.prototype.map=function(f){
			return this
		}
		Left.prototype.map=function(f){
			return this
		}
		Right.prototype.map=function(f){
			return Right.of(f(this.__value))
		}
		//left和right唯一区别就在与map方法的实现，Right.map的行为和我们之前提到的map函数一样。但是left.map就很不同了：它不会对容器做任何事情，只是很简单地把这个容器拿进来又扔出去。这个特性意味着，Left可以用来传递一个错误信息.
		let getAge = user=>user.age?Right.of(user.age):Left.of("ERROR!")
			getAge({name:"zhangsan",age:12}).map(age=>`Age is ${age}`)//Right(Age is 12)
			getAge({name:"zhangsan"}).map(age=>`Age is ${age}`)//Left("Error")
	```
		Left可以让调用链中任意一环的错误立即返回到调用链的尾部，这给我们错误处理带来了很大的方便，再也不用一层又一层的try/catch
		- AP因子
		1、函子里面包含的值，完全可能是函数。我们可以想象这样一种情况，一个函子的值是数值，另一个函子的值是函子。
		```	
			class AP extends Functor{
				ap(f){
					return AP.of(this._val(f.val))
				}
			}
			AP.of(addTwo).ap(Functor.of(2))
		```
		- IO
		1、真正的程序总是要接触肮脏的世界。
		```
		function readlocalStorage(){
			return window.localStorage();
		}
		```
		2、IO跟前面那几个Functor不同在于，它是__value是一个函数。它把不纯的操作（比如IO、网络请求、DOM）包裹到一个函数内，从而延迟这个操作的执行。所以我们认为，IO包含的是被包裹的操作的返回值。
		3、IO也算是惰性求值
		4、IO负责了调用链积累了很多很多不纯的操作，带来的复杂性和不可维护性
		```
			import _ from 'lodash'
			var compose = _.flowRight;//函数由右至左执行
			var IO = function(f){
				this.__value = f;
			}
			IO.of=x=>new IO(x)
			IO.prototype.map=function(f){
				return new IO(compose(f,this__value))
			}
			//node
			var fs = require("fs");
			var readFile=function(filename){
				return new IO(function(){
					return fs.readFileSync(filename,"utf-8")
				})
			}
			//flatMap()  返回映射结果
			readFile("../css3d/index.html").flatMap(tail).flatMap(print)
			//同等于

			//chain返回一个lodash实例，该实例包含value启用显示方法链序列的封装
			readFile("../css3d/index.html").chain(tail).chain(print)
		```