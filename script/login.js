console.log('login script connected');
$(document).ready(function(){
    var loginstatus = localStorage.getItem('logstat');
    if (loginstatus == null)
    {
        localStorage.setItem('logstat','0');
    }
    $('#log_in').click(function(){
        $('.overlay').show();
        $('.logbar').show();
        $('body').css("overflow","hidden");
    });
    $('#login_btn').click(function(){
        var handle = $('#username_log').val();
        var password = $('#password_log').val();
       
        var input_data = {
            'username_log': handle,
            'password_log': password
        };
        console.log(input_data);
        
        $.post('back/login.php', input_data, function (output, status) {
            console.log(output,status);
            if (output == "LOGIN SUCCESS")
            {
                localStorage.setItem('logstat','1');
                localStorage.setItem('username',handle);
                console.log(loginstatus);
                // alert("Login successfully");
                $('.overlay').hide();
                $('.logbar').hide();
                $('body').css("overflow","auto");
                window.location.pathname = '/discite/search.html';
            }
            else{
                localStorage.setItem('logstat','0');
                alert("Username or password incorrect!");
            }
		});
    });
});