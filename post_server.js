const translate = require('google-translate-api');
var removeDuplicates=require('./removeDuplicate.js');
var jquery=require('./jquery.js');
var tr=require('./tr.js');
var express=require('express');
var path=require('path');
var app=express();
var bodyparser=require('body-parser');

var urlEncodedParser=bodyparser.urlencoded({extended:false});

app.set('views', path.join('views'));
app.set('view engine','jade');
app.use(express.static(__dirname+'../public'));
app.get('/',function(req,res){
        res.render("index");
})

app.post('/',urlEncodedParser,function(req,res){
	var response= req.body.txt1.split(".");	
	var lang=req.body.sel;
	console.log(req.body);
        for(var j=0;j<response.length;j++)
        {
		removeDuplicates(response[j],function(resp){
			response[j]=resp.join(" ");
		})
        }
	tr(response,0,lang,res);
})

var server=app.listen(8081,function(){
	console.log("listening to /process_post");
})
