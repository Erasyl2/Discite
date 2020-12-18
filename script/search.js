console.log("search script connected");
$(document).ready(function(){
    $('.Tsearch').keydown(function(event){
        var key = event.which;
        var teachers = {
            'Alex': 0,
            'Yerzhan': 1,
            'Andrew': 2,
            'Askar': 3,
            'Adema':4,
            'Alfia':5,
            'Aiko':6
        };
        if (key == 13)
        {
            console.log('enter is pressed');
            var q = $('.Tsearch').val();
            if (teachers[q] == undefined)
            {
                alert('Not found');
            }
            else
            {
                document.querySelector('#searchpage').scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                console.log($(this).val());
                console.log(teachers[q]);
                $('.Tprofile').css('display','none');
                $("#T"+teachers[q]).css("display","block");
            }
        }
    });
});