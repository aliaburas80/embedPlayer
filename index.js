let express = require('express');
let ejs = require('ejs')
let app = express();

const host="http://localhost:3000/ar/embed/"

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    console.log('[ QUERY! ] ' +req.query.url)
    res.render('index',{
        "location":host+req.query.url
    });
})

app.listen(8010);
console.log('8010');

//aliaburas80@gmail.com
//ghadeer2910