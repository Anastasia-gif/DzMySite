
$('.header__navBar a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 450,   // по умолчанию «400» 
        easing: "swing" // по умолчанию «swing» 
    });

    return false;
});
	