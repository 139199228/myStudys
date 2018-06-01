const fs = require("fs")

function isHtml(path, res) {
    var lastVal = path.lastIndexOf('.')
    console.log(lastVal)
    var last = path.substring(lastVal, path.lengt)
    switch (last) {
        case '.html':
            return res.writeHead(200, {
                "Content-Type": "text/html;charset=utf-8"
            })
        case '.css':
            return res.writeHead(200, {
                "Content-Type": "text/css;charset=utf-8"
            });
        case ".js":
            return res.writeHead(200, {
                "Content-Type": "application/x-javascript"
            });
    }
}
class Login {
    constructor(obj, response) {
        this.id = obj.id
        this.name = obj.name
        this.age = obj.name
    }
    getName(response) {
        response.write(`我是${this.name}，我今年${this.age}`);
    }
    login(response) {
        this.getFile('../func/demo.html').then(res => {
            response.write(res)
            response.end()
        }).catch(rej => console.log(rej))
    }
    getFile(path, response) {

        console.log(isHtml(".." + path, response))


        return new Promise((resolve, reject) => {
            fs.readFile(".." + path, 'utf-8', (err, data) => {
                if (err) return reject(err)
                resolve(data)
            })
        })

    }
    myWriteFile(path, data) {


        return new Promise((resolve, reject) => {

            fs.writeFile(path, data, (err, data) => {
                if (err) return reject(err)

                resolve(data)
            })
        })
    }
}
module.exports = Login