var express=require('express');
var path=require('path');
var app=express();

app.set('views', path.join('views'));
app.set('view engine','jade');
app.use(express.static(__dirname+'../public'));
app.get('/',function(req,res){
	res.render("index");
})

app.get('/process_get',function(req,res){
//	response={
//		val: req.query.txt
//	};
	var response= req.query.txt.split(".");
	for(var j=0;j<response.length;j++)
	{	
		var sentence=response[j].split(" ");
		for(var i=1;i<sentence.length;i++)
		{
			if(sentence[i]===sentence[i-1])
			{
				sentence.splice(i,1);
				i=i-1;
			}
		}
		response[j]=sentence.join(" ");
	}
	var finalString=response.join(".");
	console.log(finalString);
	res.end(JSON.stringify(finalString));
})
var server=app.listen(8081,function(){
	console.log("listening to 8081");
})
