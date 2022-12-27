$('.open').on('click', function(){
    $(".container-nav").addClass('nav-visible');
    $(".po-menu-icon").css('display', "none");
    $(".close").css('visibility', "visible");
});

$('.close-nav').on('click', function(){
    $(".container-nav").removeClass('nav-visible');
    $(".close").css('visibility', "hidden");
    $(".po-menu-icon").css('display', "inline-block");
});

$('.close').on('click', function(){
    $(".container-nav").removeClass('nav-visible');
    $(".close").css('visibility', "hidden");
    $(".po-menu-icon").css('display', "inline-block");
    
});