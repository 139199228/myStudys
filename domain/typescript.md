###nodejs
- 有模有样的后端语言
- 又是一个新玩具
- 大量的闭包、回调、内存浪费、全站崩溃
- 面向过程的观念无法改变
- 对于集成、或者接口等一听就迷糊

###typescript
- Typescript是一种由微软开发的自然和开源的编程语言。它是javascript的一个超集，而且本质上这个语言添加了可选的静态类型和基于类的面向对象编程。
1、强类型的编程语言 显示声明字符串；
`init a =3;
string text;`
2、常亮、变量、作用域、this、可控类型、真实数组、真实数组、结构、枚举。
3、面向对象 类、继承、多态、接口、命名空间、变量的修饰、构造函数、访问器（Get、Set）、静态属性；
4、委托、泛型、反射、集合（动态数组（ArrayList/Hashtable/SartedList/Stack/Queue））、匿名方法、拆箱
这些语言是实现数据结构的高级动态语音
5、多线程
- TypeScript 增加了代码的可读性和可维护性



###笔记  typescript
- 原始数据类型
javascript的类型分为：原始数据类型和对象类型；
原始类型包括：布尔值、数值、字符串、null、undefined以及ES6的唯一类型symbol；
    - 布尔值
        布尔值是最基础的类型，在Typescript中，使用boolean定义布尔型：
        ```let isDone:boolean = false;
            //编译通过
            //后面的约定,为强调编译错误代码片段，默认为编译通过
        ```
        注意，在用构造函数Boolean创造的对象不是布尔值：
        ```let createBynewBoolean = new Boolean(1);
        //index.ts(1,5):error ts2322:Type 'Boolean' is not assiginable to type 'boolean'
        //后面约定，注释中标出了编译报错的代码片段，表示编译未通过
        ```
        事实上new Boolean()返回的是一个Boolean对象；
        ```let CreateByNewBoolean:Boolean=new Boolean(1)
        ```
        直接调用Boolean也可以返回一个boolean类型：
        ```let createByBoolean:boolean = Boolean(1);
        ```
        在Typescript中,boolean是Javascript中的基本类型，而Boolean是Javascript中的构造函数。其他基本类型（除了null和undefined）一样，不再赘述。
        - 数值
        使用number定义数值类型：
        ```
            let becLiteral:number=6;
            let hexLiteral: number = 0xf00d;
            // ES6 中的二进制表示法
            let binaryLiteral: number = 0b1010;
            // ES6 中的八进制表示法
            let octalLiteral: number = 0o744;
            let notANumber: number = NaN;
            let infinityNumber: number = Infinity;```
        编译结果：
        ```
            var decLiteral = 6;
            var hexLiteral = 0xf00d;
            // ES6 中的二进制表示法
            var binaryLiteral = 10;
            // ES6 中的八进制表示法
            var octalLiteral = 484;
            var notANumber = NaN;
            var infinityNumber = Infinity;
            ```
        其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。
        - 字符串
        使用string定义字符串类型：
        ```
            let myName:string = 'Tom';
            let myAge:number = 25;
            //字符串模板。
            let sentence = '我是${myName}，我今年${myAge}岁';
        ```
        其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式。
        - 空值
        javascript 空值（Void）的概念，在TypeScript中，可以用void表示没有任何返回值的函数：
        ```
        function alertVoid():void{
            alert("我是void我没有return返回值")
        }
        ```
        声明一个`void`类型的变量没有什么用，因为你只能将它赋值为`undefined`和`null`:
        ```let unuable：void=undefined;
        ```
        - Null 和 Undefined
        在TypeScript中，可以使用`null`和`undefined`来定义这两个原始数据类型：
        ```
            let u:undefined=undefined;
            let n:null=null
        ```
        undefined类型的变量只能被赋值为`undefined`,`null`类型的变量只能被赋值为`null`;
        与`void`的区别是，`undefined`和`null`是所有类型的子类型，也就是说`undefined`类型的变量，可以赋值给`number`类型的变量:
        ```
        //这样不会报错
        let num:number=undefined;
        //这样也不会报错
        let u:undefined;
        let num:number = u;
        ```
        而`void`类型的变量不能赋值给`number`类型的变量：
        ```
        let u:void;
        let num:number=u;
        //index.ts(2,5): error TS2322: Type 'void' is not assignable to type 'number'.
- 任意值
任意值（any）是用来表示允许赋值为任意类型。
    - 什么是任意类型
    如果是一个普通类型，在赋值过程中改变类型是不允许的：
    ```
    let myFaorteNumber:string='seven';
    myFaorteNumber=7;
    // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
    ```
    但如果是`any`类型，则允许被赋值为任意类型。
    ```
        let myFavoriteNumber: any = 'seven';
        myFavoriteNumber = 7;
    ```
    - 任意值的属性和方法
    在任意值上访问任何属性和方法都是被允许的：
    ```
    let anyThing:any='hello';
    console.log(anyThing.myName);
    console.log(anyThing.myName.firstName);
    ```
    也允许调用任何方法:
    ```let anyThing:any = 'Tom';
    anyThing.setName('Jerry');
    anyThing.setName('Jerry').sayHello();
    anyThing.myName.setFirstName('Cat');```
    可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
    - 未声明的类型的变量
    变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型。
    ```
    let something;
    something = 'seven';
    something = 7;

    something.setName('Tom');
    ```
    等价于
    ```
    let something: any;
    something = 'seven';
    something = 7;

    something.setName('Tom');```
- 类型推论
如果没有明确的制定类型，那么Typescript会依照类型推论（Type inference）的规则腿短出一个类型。
    - 什么是类型推论
    以下代码虽然没有指定类型，但是会在编译的时候报错：
    ```
    let myFavoriteNumber='seven';
    myFavoriteNumber=8;
    // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
    ```
    事实上，它等价于：
    ```
    let myFavoriteNumber: string = 'seven';
    myFavoriteNumber = 7;

    // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
    ```
    typescript 会在没有明确的制定类型的时候推测出一个类型。这就类型推论。
    - 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成`any`类型而完全不被类型检查：
    ```
    let myFavoriteNumber;
    myFavoriteNumber="str";
    myFavoriteNumber=1;
    ```
- 联合类型
联合类型（Union Types）表示取值可以为多重类型中的一种。
    - 简单的例子：
    ```
    let myNumber:string|number;
    myNumber='str';
    myNumber=2
    ```
    ```
    let myNumber:string|number;
    myNumber=true;
    // index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
    //   Type 'boolean' is not assignable to type 'number'.
    ```
    联合类型使用|分隔每个类型。
    这里的`let myNumber:string|number`的含义是，允许`myNumber`的类型是`string`或者`number`,但是不能是其他类型。
    - 访问联合类型的属性或方法
    当Typescript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问联合类型的所有类型里共有的属性或方法：
    ```function getLength(something:string|number):number{
        return something.length;
    }
    // index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
    //   Property 'length' does not exist on type 'number'.
    ```
    上例中，`length`不是`string`和`number`的共有属性，所以会报错。
    ```function getString(something:string|number):string{
        return sonething.toString()
    }```
    联合类型的变量在被赋值的时候，回根据类型推论的规则推断出一个类型:
    ```
    let myNumber:string|number;
    myNumber='str';
    console.log(myNunber.length);
    myNumber=7
    console.log(myNumber.length);// 编译时报错
    // index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
    ``
    上例中，第二行的 myFavoriteNumber 被推断成了 string，访问它的 length 属性不会报错。
    
    而第四行的 myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了。
- 对象的类型--接口
在Typescript中，我们使用接口(interfaces)来定义对象的类型。
    - 什么是接口
    在面向对象语言中，接口(interfaces)是一个很重要的概念，它是对行为的抽象，而具体如何行动需要有类(classes)去实现(implements)。
    typescript这种的接口是一个非常灵活的概念，除了可用于类的一部分行为进行抽象意外，也常用于[对象的形状（shape）]进行描述
    - 简单的例子
    ```
    interface Person{
        name:string;
        age:number
    }
    let tom:Person={
        name:'tom',
        age:22
    }
    ```
    上面的例子中，我们定义了一个接口`Person`，接着定义了一个变量`tom`，它的类型是`person`，这样，我们就约束了`tom`的形状必须和接口`Person`一致。
    定义的变量比接口少了一些属性是不允许的：
    ```
    interface Person {
        name: string;
        age: number;
    }

    let tom: Person = {
        name: 'Tom'
    };

    // index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
    //   Property 'age' is missing in type '{ name: string; }'.
    ```
    多一些属性也是不允许的：
    ```
    interface Person {
        name: string;
        age: number;
    }

    let tom: Person = {
        name: 'Tom',
        age: 25,
        gender: 'male'
    };

    // index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
    //   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
    ```
    可见，赋值的时候，变量的形状必须和接口的形状保持一致。
    - 可选属性
    有时我们希望不要完全匹配一个形状，那么可以用可选属性：(仍然不允许添加未定义的属性)
    ```
    interface Person {
        name: string;
        age?: number;
    }

    let tom: Person = {
        name: 'Tom'
    };
    ```
    - 任意属性
    有时候我们希望一个接口允许有任意属性，可以使用:
    ```
    interface Person{
        name:string;
        age?:number;
        [propName:string]:any;
    }
    ```
    使用`[propName:string]·定义了任意属性取`string`类型的值。
    需要注意的是，一旦定义个任意属性，那么确定属性和可选属性都必须是它的子属性
     ```
    interface Person{
        name:string;
        age?:number;
        [propName:string]:any;
    }
    let tom:Person={
        name:"tom",
        age:12,
        gender:"male"
    }
    // index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
    // index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
    //   Index signatures are incompatible.
    //     Type 'string | number' is not assignable to type 'string'.
    //       Type 'number' is not assignable to type 'string'.
    ```
    - 只读属性
    有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用`readonly`定义只读属性：
    ```
    interface Parent {
        readonly id: number;
        name: string;
        age?: string;
        [a: string]: any;
    }
    let tom: Parent = {
        id: 1,
        name: "tom",
        age: "12",
        qitaName: 'moty'
    }
    ```
- 数组类型
在typescript中，数组类型有很多种定义方式，比较灵活。
    - [类型+方括号]表示法
    最简单的方法是使用（类型+[方括号]）表示数组：
    ```
    let fibonacci:number[] = [1,2,3,4,5]
    ```
    数组的项中不允许出来其他的类型：
    ```
    let fibonacci: number[] = [1, '1', 2, 3, 5];

    // index.ts(1,5): error TS2322: Type '(number | string)[]' is not assignable to type 'number[]'.
    //   Type 'number | string' is not assignable to type 'number'.
    //     Type 'string' is not assignable to type 'number'.
    ```
    上例中，[1, '1', 2, 3, 5] 的类型被推断为 (number | string)[]，这是联合类型和数组的结合。
    数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
    ```
    let fibonacci: number[] = [1, 1, 2, 3, 5];
    fibonacci.push('8');

    // index.ts(2,16): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
    ```
    上例中，push 方法只允许传入 number 类型的参数，但是却传了一个 string 类型的参数，所以报错了。
    - 数组泛型
    也可以使用数组泛型（Array Generic）Array<elemType>来表示数组：
    ```
    let fibonacci:Array<number>=[1,2,3,4,5]```
    - 用接口表示数组
    ```
    interface NumberArray{
        [index:number]: number;
    }
    let arr :NumberArray=[1,2,2,3,4,5]
    ```
    NumberArray 表示：只要index的类型是Number，那么值的类型必须是Number.
    - any在数组中的应用
    ```
    let list:any[]=['Xcat Liu',25,{website:'http//xcatliu.com'}]
    ```
- 类
传统方法中，javascript通过构造函数实现类的概念，通过原型实现继承。而在ES6中，我们终于迎来了`class`.
    - 类的概念
    · 类(Class):定义了一件事物的抽象特点，包含它的属性和方法。
    · 对象(Object):类的实例，通过`new`生成。
    · 面向对象（OPP）的三大特点:封装、继承、多态。
    · 封装（Encapsulation）:将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
    · 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性。
    · 多态（Polymorphism）：有继承而产生了相关不同的类，对同一个方法可以有不同的相应。比如`cat`和`Dog`，就可以直接调用`eat`方法。此时针对某一个实例，我们无需了解它是`Cat`和`Dog`，就可以直接调用`eat`方法，程序会自动判断出来应该如何执行`eat`
    · 存取器(getter & setter)：用改变属性的读取和赋值行为
    · 修饰符(modifiers):修饰符是一些关键字，用于限定成员或类型的性质。比如`public`表示共有属性或方法。
    · 抽象类（Abstract Class）：抽象类是供其他类继承的基数，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现。
    · 接口(Interfaces)：不同类之间共有属性或方法，可以抽象成一个接口。接口可以被类实现(implements).一个类智能是继承另一个类，但是可以实现多个接口。
    - 继承
    使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
    ```
        class Cat extends Animal {
            constructor(name) {
                super(name); // 调用父类的 constructor(name)
                console.log(this.name);
            }
            sayHi() {
                return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
            }
        }

        let c = new Cat('Tom'); // Tom
        console.log(c.sayHi()); // Meow, My name is Tom
    ```
    - 存储器
    使用getter和setter可以改变属性的赋值和读取行为：
    ```
        class Animal {
            constructor(name) {
                this.name = name;
            }
            get name() {
                return 'Jack';
            }
            set name(value) {
                console.log('setter: ' + value);
            }
        }
        ```
        - typeScript 中类的用法
        public privete 和 protected
        Typescript可以使用三种访问修饰符（Access Modifiers），分别是`public`、`private` 和 `protecated`。
        · `public`修饰的属性和方法是共有的，可以在任何地方被访问到，默认所有的属性和方法都是`public`的
        · `private`修饰的属性或方法是私有的，不能再声明它的累的外部访问到。
        · `protected`修饰的属性或方法是受保护的，它和`private`类似，区别是它在子类中是允许被访问的。
        - 抽象类
        `abstract`用于定义抽象类和其中的抽象方法。
