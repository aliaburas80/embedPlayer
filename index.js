let express = require('express');
let ejs = require('ejs')
let app = express();
//
app.set('port', process.env.PORT || 8010);
//
const host="http://localhost:3000/ar/embed/"
//
app.set('view engine','ejs');
//
app.get('/',(req,res)=>{
    console.log('[ QUERY! ] ' +req.query.url)
    res.render('index',{
        "location":host+req.query.url
    });
})
//
app.listen(app.get('port'));
//
console.log(app.get('port'));
