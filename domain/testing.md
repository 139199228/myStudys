###测试核心概念
- 测试核心概念
1.单元测试
2.性能测试
3.安全测试
4.功能测试 
-单元测试
目的：单元测试能够让开发者明确知道代码结果；
原则：单一职责、接口抽象、层次分离；
断言库：保证最小单元是否正常运行监测方法；
测试风格：测试驱动开发（Text-Driven Developent,TDD），(Behavior Driven Development,BDD)行为驱动开发均是敏捷开发方法论；
TDD关注所有的功能是否被实现（每一个功能都必须有对应的测试用例），suite配合test利用assert('tobi'==user.name);
BDD关注整体行为是否符合整体预期，编写的每一行代码都有目的的提供一个全面的测试用例集。（），describe配合it利用自然语言expect[1],toEqual(fn ())执行；
- 单元测试框架
better-assert（TDD 断言库 190star 19fork）
should.js（BDD断言库 2295star 194fork）
expect.js（BDD断言库 1391star 162fork）
chai.js(TDD BDD双模 2823star 271fork)
jasmine.js(BDD 13524star 2012fork)
- 单元测试运行流程
before -> beforeEach -> it-> after -> afterEach
每一个测试用例组通过describe进行设置
1、before单个测试用例(it)开始前
2、beforeEach每一个测试用例开始前
3、it 定义测试用例并利用断言库进行;设置chai如：expect(x).to.equal（true）;异步mocha
4、以上专业术语叫mock;
- 自动化单元测试
1、karma 自动化runner集成PhantomJS刷新
`npm install karma-cli --save-dev`
`npm install karma-chrome-launcher --save-dev`
`npm install karma-phantomjs-launcher --save-dev`
`npm install karma-mocha --save-dev`
`npm install karma-chai --save-dev`
- 报告和电测覆盖率检查
`npm install karma-coverage --save-dev`
```coverageReporte:{type:'html',dir:'coverage'}//配置代码覆盖测试率生成结果```
- 性能测试
	- 基准测试
	1、面向切面变成AOP无侵入式统计
	2、Banchmark基准测试方法，它并不是简单地统计进行多次测试代码后对比时间，它对测试有着严密的抽样过程，执行多少次取决于采样到的数据能否完成统计。根据统计次数计算方差。
 	- 压力测试
	1、对网络接口做压力测试需要检测的几个常用指标有吞吐率、相应时间和并发数，这些指标反映了服务器并发处理能力。
	2、PV网站当日访问人数UV独立访问人数。PV每天几十万甚至几百万就需要考虑压力测试。换算公式QPS=PV/t ps：1000000/10*60*60=27.7(100万请求集中在10个小时，服务器美秒梳理27.7个业务请求)
	3、常用的压力测试工具是ab、siege、http_load
	4、ab -c 100 -n http:localhost:8001每秒持续发出28个请求Request per second表示服务器美秒处理请求书 即为QOS
- 安全测试-安全漏洞检查
1、xss
2、SQL
3、csrf
- 功能测试
	用户真实性检查
	1、selenium-webdriver
	2、protractor selenium-standalone （angular）
	3、http://webdrive.io/ WEBDRIVERI/O
	4、冒烟测试 Smoke Test 自由测试的一种，找到一个BUG开发修复，然后专门针对此BUG，优点节省时间防止build失败，缺点是覆盖率极地。
	5、回归测试 修改一处对整体功能全部测试，一般配合自动化测试。
- javascript lint&hint
- 目的：检测javascript代码标准
- 原因：javascript代码诡异，保证团队代码规范
- lint：`http://www.jslint.com`
- hint：`http://www.jshint.com`
- 搭配自动化任务管理工具完善自动化测试grunt-jshint、grunt-jslint；