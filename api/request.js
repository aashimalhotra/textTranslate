var jquerymin=require('jquery-min');

function myFunc()
{
var person={
	fname: "aashi",
	lname: "malhotra"
	};

$.ajax({

	 url: 'http://localhost:8081/api/person',
         type: 'POST',
         dataType: 'json',
         data: person,
         success: function (data, textStatus, xhr) {
         console.log(data);
          },
         error: function (xhr, textStatus, errorThrown) {
              console.log('Error in Operation');
         }
});
}

myFunc();
