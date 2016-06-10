var showImg = function (index) {
	"use strict";	
	var img;
	
	img = $("img").eq(index);
	
	if (img.is(":visible")) {
		img.hide();
	} else {
		img.show();
	}
};

$(".btn").each( function(index) {
  $(this).bind("click", function () {
				showImg(index);
  });
});