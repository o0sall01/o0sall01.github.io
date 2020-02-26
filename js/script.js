$(function () {
    $("#navbarToggle").blur(function () {
        var screeWidth = window.innerWidth;
        if(screeWidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});