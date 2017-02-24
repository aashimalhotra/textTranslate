$(document).ready(function(){
    alert("hello");
    $('#select_link').click(function(e){
        e.preventDefault();
        console.log('select_link clicked');
        var data= {
            txt: $('#txt1').val()
        }
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: "http://localhost:8081/endpoint",
            success: function(data) {
                console.log('success');
                console.log(data);
                $('#txt2').val(data);
            }
        });
    });
});
