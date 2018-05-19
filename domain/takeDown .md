###如何跨域
* 同源策略
    * 协议相同、域名相同、端口相同
*浏览器不同的域名不能访问对应的cookie但是表单没有限制
*同源策略限制的对象
    * cookie、Localstorage和IndexDB无法获取；
    * DOM无法获得；
    * Ajax不能发送；
* 如何设置同源策略（hosts）
* Cookie 一级域名访问2级域名
    * A网页是`http://w1.example.com/a.html`，B网页是`http://w2.example/b.html`，那么只要设置相同的`document.domain = 'examplae.com'`设置同源策略（最实用的策略）
    * 现在，A网页通过脚本设置一个Cookie`document.cookie=‘test1=hello’`
    * B网页就可以读到这个Cookie`var allCookie = document.cookie`
    * 注意！这种方法只适用于Cookie和iframe窗口，Localstorage和IndexDB无法通过这种方法，规避同源正常，而要使用PostMessage API
    * 另外，服务器也可以设置Cookie的时候，制定Cookie的所属域名为一级域名，比如`.example.com`
    set-cookie:key=val;domain=.example.com;path=/
* file://:Cxxx是文件协议，平时访问的是http协议，img src可以跨域访问图片
* 测试一下手机网上webapp页面 根据这个网速可以给用户处一些网速比较慢的解决方案
`var s = new images();
var start = Date.now();
s.src = "http://www.baidu.com/a.gif";
s.onload = function(){
	var end = Date.now();
	t = end - start;
	v = '1.1'/t = 'kb/s' 
}`
* 怎么突破同源策略
    * html标签  img、iframe、srcipt（jsonp）、link（background）



