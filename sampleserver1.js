let http=require('http');
let fs=require('fs');

/*function hello(req,res) {
    console.log('request received');*/
    fs.readFile('helloo.html', function (err,data) {
        if (!err) {

            http.createServer(function (req, res) {
                res.write(data)
                res.end()
            }).listen(4003)

        }
    })


/*
http.createServer(hello).listen(8000);
console.log('server started');*/
