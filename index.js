let express = require('express');
let ejs = require('ejs')
let app = express();
let bodyParser = require("body-parser")

//
app.set('port', process.env.PORT || 8010);
//
const host="http://localhost:3000/ar/embed/"

//
app.set('view engine','ejs');
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
//

//

app.post('/ifram',(req,res)=>{
    console.log(req.body);
    res.render('index',{
        "url"   :req.body.url,
        "width" :req.body.width ,
        "height":req.body.height
    })
})


app.get('/',(req,res)=>{
    res.render('index',{
        "url"   :'',
        "width" :10 ,
        "height":10
    })
    })

app.listen(app.get('port'));
//
console.log(app.get('port'));
