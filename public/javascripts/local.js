function removeDuplicates()
{
    var data=$('#txt1').val().split(".");
    data.splice(data.length-1,1);
    for(var j=0;j<data.length;j++)
    {
        var sentence=data[j].split(" ");
        for(var i=1;i<sentence.length;i++)
        {
            if(sentence[i]===sentence[i-1])
            {
                sentence.splice(i,1);
                i=i-1;
            }
        }
        data[j]=sentence.join(" ");
    }
    var finalstring=data.join(".")+'.';
    $('#div1').val(finalstring);
}
$(document).ready(function(){
    $('#select_link').click(function(e){
        e.preventDefault();
        console.log('select_link clicked');
        removeDuplicates();
        var data= {
            txt: $('#div1').val(),
	        lang: $('#sel1').val()
        }
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: "/endpoint",
            success: function(data) {
                console.log('success');
		        console.log(JSON.stringify(data));
                $('#txt2').val(data.result);
            },
            error: function()
            {
                console.log("error");
            }
        });
    });
});