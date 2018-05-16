$(window).scroll(function() {  
    var scroll = $(this).scrollTop();
    if (scroll > 140) {
        $('nav').addClass('nav-shrink');
    } else {    
       $('nav').removeClass('nav-shrink');
    }
});