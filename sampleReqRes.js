let http=require('http')
http.createServer(function (req,res) {

    res.write('')
    res.end()

}).listen(3003)