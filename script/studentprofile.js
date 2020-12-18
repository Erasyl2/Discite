console.log('studentprofile script connected');
$(document).ready(function()
{
    if(localStorage.getItem('logstat') == null || localStorage.getItem('logstat') == 0)
    {
        alert("User not found, please log in to account");
        window.location.pathname = 'discite';
    }
    var username = localStorage.getItem('username');
    $('.welcome').text('Aloha, '+username);
    $("#date").mask("99.99.9999", {placeholder: "dd.mm.yyyy" });
});