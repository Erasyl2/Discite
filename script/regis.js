console.log('registration sctipt connected');
$(document).ready(function()
{
    $('#join_us').click(function(){
        $('.overlay').show();
        $('.regbar').show();
        $('body').css("overflow","hidden");
    });
    $('#submit_btn').click(function(){
        var name = $('#name').val();
        var handle = $('#username').val();
        var mail = $('#mail').val();
        var numb = $('#phone1').val();
        var teadent =$('#teadent').val();
        var password = $('#password').val();
        
        var input_data = {
            'name':name,
            'handle': handle,
            'mail': mail,
            'numb': numb,
            'teadent': teadent,
            'password':  password
        };

        console.log(input_data);
        $.post('back/regis.php', input_data, function (output, status) {
            console.log(output,status);
        });
        alert('You have been registered');
        $('.overlay').hide();
        $('.regbar').hide();
        $('body').css("overflow","auto");
    });
});



