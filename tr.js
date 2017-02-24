const translate = require('google-translate-api');

module.exports=function trans(response,index,lang,res){
translate(response[index], {to: lang}).then(function(resp) {
    	response[index]=resp.text;
  		if(index<response.length-1)
		{
			index++;
			trans(response,index,lang,res);
		}
		else
		{
			response.splice(response.length-1,1);
        	var finalString=response.join(".");
			console.log(finalString);
			res.json({result:finalString});
		}
    }).catch(function(err){
            console.error(err);
    });         
}	
