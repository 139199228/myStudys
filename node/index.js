const http = require("http");
const url = require('url');
const fs = require('fs');
const Logins = require('./router.js')
const exception = require('./error/err.js')
const {
    expfun
} = require('./error/err.js')
const app = http.createServer((request, response) => {

    // response.writeHead(200, {
    //     "Content-Type": "images/jpg"
    // });
    if (request.url !== '/favicon.ico') {
        let obj = {
            id: 1,
            name: 'zhansgan',
            age: 12
        }
        try {
            const routers = new Logins(obj, response)
            // let path = url.parse(request.url).pathname
            let data = expfun(0)
            response.end(data)
            // routers[path]()
            // var getFile = routers.getFile('./a.jpg', 'binary')
            // var getFile = routers.getFile(path, response)
            // routers[path](response)
            // getFile.then((res) => {
            //     var arr = []
            //     arr.push(res);
            //     console.log(arr.join(""))
            //     var writeFile = routers.myWriteFile('./a.text', arr.join(""))
            //     return writeFile
            // }, (rej) => {
            //     console.log(rej)
            // })
            // getFile.then(res => {
            //     response.write(res)
            //     response.end();
            // }).catch(rej => console.log(rej))
        } catch (error) {
            response.writeHead(200, {
                'Content-Type': 'text/html;charset=utf8'
            })

            response.write('出错了')
            console.log("aa" + error)

            response.end()
        }

    }

}).listen(8888, () => {
    console.log("ok")
})