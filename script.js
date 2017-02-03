
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img id="overlayimg">');

$overlay.append($image);

$("body").append($overlay);


var href = "logo.jpg";
$image.attr("src", href);

$overlay.show();
$overlay.fadeOut(3000, "easeInOutQuint");
