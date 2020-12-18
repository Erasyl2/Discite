console.log('Main script connected');

$(document).ready(function()
{
    var col;
    var pagecol = localStorage.getItem('pagecol');
    if (pagecol == null)
    {
        pagecol = 1;
    }
    changestyle(pagecol);
    
    function changestyle(num)
    {
        localStorage.setItem('pagecol',num);
        if (num == 1)
        {
            col = "#00517C";
            $('#blue').css("border-style","solid");
            $('#green').css("border-style","none");
            $('#orange').css("border-style","none");
            $('.mainbg').css("background-color","#00699E");
            $('#mainlogo').attr("src","img/mainlogo1.png");
            $('#regbarlogo').attr("src","img/mainlogo1.png");
            $('#logbarlogo').attr("src","img/mainlogo1.png");

        }
        if (num == 2)
        {
            col = "#4CAF50";
            $('#green').css("border-style","solid");
            $('#blue').css("border-style","none");
            $('#orange').css("border-style","none");
            $('.mainbg').css("background-color","#5FD863");
            $('#mainlogo').attr("src","img/mainlogo2.png");;
            $('#regbarlogo').attr("src","img/mainlogo2.png");
            $('#logbarlogo').attr("src","img/mainlogo2.png");

        }
        if (num == 3)
        {
            col = "#F48024";
            $('#orange').css("border-style","solid");
            $('#blue').css("border-style","none");
            $('#green').css("border-style","none");
            $('.mainbg').css("background-color","#C6611D");
            $('#mainlogo').attr("src","img/mainlogo3.png");
            $('#regbarlogo').attr("src","img/mainlogo3.png");
            $('#logbarlogo').attr("src","img/mainlogo3.png");

        }
        localStorage.setItem('pagecol',num);
        $('.nbbtn').css("color", col);
        $('.navbar').css("box-shadow", "0 0 22px 1px " + col);
        $('.nbbtn').hover(function()
        {
            $(this).css("background-color",col);
            $(this).css("color","white");
        },
        function()
        {
            $(this).css("background-color","white");
            $(this).css("color",col);
        });
        $('.mainbtn').css("color",col);
        $('.regbar').css("color",col);
        $('.logbarinsc').css("color",col);
        $('#submit_btn').css("background-color",col);
        $('#login_btn').css("background-color",col);
        $('.LogbarP').css('color',col);
        $('.about1h1').css("color",col);
        $('.about1p').css("color",col);
        $('.exitbtn').css("color",col);
        $('footer').css("box-shadow", "0 0 22px 1px " + col);
        $('body').css("color",col);
        $('body').css("background-color",col);
        $('#cprofile').css("background-color",col);
        $('#cprofile').css("color",'white');
        $('#Steacher').css("color",'white');
        $('#Steacher').css("background-color",col);

    }   
    $('.mainbtn').hover(function()
    {
        $(this).css("box-shadow","0px 0px 0px");
        },
        function()
        {
            $(this).css("box-shadow","2px 2px 12px black");
        });
    $("#blue").click(function()
        {
            changestyle(1);
            console.log(1);
        }
    );
    $("#green").click(function()
    {
        changestyle(2);
        console.log(2);
    }
    );
    $("#orange").click(function()
        {
            changestyle(3);
            console.log(3);
        }
    );
    $('#about').click(function()
    {
        console.log('about button clicked');
        document.querySelector('#mainpage').scrollIntoView({ 
            behavior: 'smooth' 
          });
    });
    $('#amteacher').click(function(){
        $('.overlay').show();
        $('.regbar').show();
        $('body').css("overflow","hidden");
    });
    $('#amstudent').click(function(){
        $('.overlay').show();
        $('.regbar').show();
        $('body').css("overflow","hidden");
    });
    $('.exitbtn').click(function(){
        $('.overlay').hide();
        $('.regbar').hide();
        $('.logbar').hide();
        $('body').css("overflow","auto");
    });
    $('#submit_btn').hover(function(){
        $(this).css("background-color","white");
        $(this).css("color",col);
    },function(){
        $(this).css("background-color",col);
        $(this).css("color","white");
    });

    $('#login_btn').hover(function(){
        $(this).css("background-color","white");
        $(this).css("color",col);
    },function(){
        $(this).css("background-color",col);
        $(this).css("color","white");
    });
    $(function(){
        $("#phone1").mask("8(999) 999-9999");
      });
    $('#profile').click(function()
    {
        window.location.pathname = '/discite/studentprofile.html';
    });
    $('#steach').click(function()
    {
        window.location.pathname = '/discite/search.html';
    });
    $('#log_out').click(function(){
        window.location.pathname = '/discite';
    });
});
