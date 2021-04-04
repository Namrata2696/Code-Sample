$(function () {
	'use strict';

	(function() {
        $('<div className="skin-switcher">'+
        '<a href="javascript:void(0)" className="color-option-box in-out">'+
                '<i className="fa fa-cog fa-spin"></i>'+
        '</a>'+
        '<div className="option-box-title">'+
                '<h3>Select Color</h3>'+
            '</div>'+
        '<ul>'+
            '<li className="colors"><span className="color" id="color-1"></span></li>'+
            '<li className="colors"><span className="color" id="color-2"></span></li>'+
            '<li className="colors"><span className="color" id="color-3"></span></li>'+
            '<li className="colors"><span className="color" id="color-4"></span></li>'+
            '<li className="colors"><span className="color" id="color-5"></span></li>'+
            '<li className="colors"><span className="color" id="color-6"></span></li>'+
        '</ul>'+
    '</div>').appendTo($('body'));
	})();

	$(".color-option-box").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("in-out")) {
            $(".skin-switcher").stop().animate({right: "0px"}, 100);
        } else {
            $(".skin-switcher").stop().animate({right: "-158px"}, 100);
        }
        
        $(this).toggleClass("in-out");
        return false;
        
    });

	$('.color').on('click', function(e) {
        var id = $(this).attr("id");        
       $("#skin-switcher-css").attr("href", "assets/css/" + id + ".css");
        e.preventDefault();
    });
});