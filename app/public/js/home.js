$( document ).ready(function() {
    $('.tap-target').tapTarget('open');
    $(".dropdown-button").dropdown();
    $('.slider').slider();

    setTimeout( function() { 
    	$('.tap-target').tapTarget('close'); 

    }, 3000);

});


