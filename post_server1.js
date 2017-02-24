var removeDuplicates=require('./removeDuplicate.js');
var tr=require('./tr.js');
var tr1=require('./tr1.js');
var express=require('express');
var app=express();
var path=require('path');
var bodyparser=require('body-parser');

app.use(bodyparser.json());
var urlEncodedParser=bodyparser.urlencoded({extended:true});

app.set('views', path.join('views'));
app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
    var lang={'auto': 'English','hi': 'hindi','bn': 'Bengali','gu': 'Gujarati','kn': 'Kannada','ml': 'Malayalam','mr': 'Marathi','ma': 'Punjabi','sd': 'Sindhi','ta': 'Tamil','te': 'Telugu'};
    res.render("index", {'Languages': lang});
})

app.post('/endpoint',urlEncodedParser,function(req, res){
    var language=req.body.lang;
	tr1(req.body.txt,language,res);
});

var server=app.listen(8081,function(){
    console.log("listening to /process_post");
})
