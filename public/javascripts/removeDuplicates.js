module.exports=function(data,callback)
{
	var sentence=data.split(" ");
	for(var i=1;i<sentence.length;i++)
	{
		if(sentence[i]===sentence[i-1])
		{
			sentence.splice(i,1);
			i=i-1;
		}
	}
	callback(sentence);
}	
