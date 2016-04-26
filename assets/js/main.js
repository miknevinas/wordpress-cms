$(function() {
    //Grab window object
    var $window = $(window);
    //Parallax Background
    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this); //assigns object
        
        $(window).scroll(function() {
            //scroll background at var speed
            //yPos is negative to scroll up
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            //final background position
            var coords = '50%' + yPos + 'px';
            //move background
            $bgobj.css({backgroundPosition: coords});
        });
    });
});