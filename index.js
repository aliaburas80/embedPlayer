let express = require('express');
let ejs = require('ejs');
var https = require('https');
var http = require('http');
let app = express();
let helmet = require('helmet')

let bodyParser = require("body-parser")

//
app.set('port', process.env.PORT || 8010);
app.set('securePort', process.env.PORT || 443);
//
const host = "http://localhost:3000/ar/embed/"

//
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(helmet({
    frameguard: false
}));

app.use((req, res, next) => {
    res.header("X-Frame-Options", "sameorigin");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("frame-ancestors", "none");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Security-Policy", "none");
    next();
});

app.post('/ifram', (req, res, next) => {
    let iframObj = `<iframe marginheight="0" marginwidth="0" allowfullscreen="true" scrolling="no" width="${req.body.width}px" frameborder="0" height="${req.body.height}px"src="${req.body.url}" nwfaketop></iframe>`
    res.setHeader('X-Frame-Options', 'ALLOW-FROM ' + req.body.domain)
    res.render('index', {
        "url": req.body.url,
        "width": req.body.width,
        "height": req.body.height,
        "ifram": iframObj
    })
})

app.get('/', (req, res, next) => {
    res.render('index', {
        "url": '',
        "width": 10,
        "height": 10,
        "ifram": ""
    })
})

console.log(app.get('securePort'));
console.log(app.get('port'));
http .createServer(app).listen(app.get('port'));
//https.createServer(app).listen(app.get('securePort'));
//app.listen(app.get('port'));