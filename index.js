function myFunction() {
	console.log("Hello from function");
}

function sum(list) {
	var total = 0;

	for (var i = 0; i < list.length; i++) {
		total = total + list[i];
	}

	return total;
}

function isBigArray(array) {
	if (array.length > 2) {
		console.log("Whoa this is a big array");
	} else {
		console.log("This is a tiny array");
	}
}

$(document).ready(function() {
	console.log("Hello from jQuery");

	for (var i = 0; i < 4; i++) {
		var $kittyImage = $('<img>').attr('src','http://storage.coolfeed.co/2012/10/Funny-Cat-Images-24-GIFs-coolfeed.co-4.gif');
		$("#kittyville").append($kittyImage);
	}

	$("#kittyville img").click(function() {
		console.log("You clicked on kitty");
		$(this).fadeOut(1000);
	});

	$("#showKitty").click(function() {
		$("#kittyville img").show();
	});

	$("#kittyville img").hover(function() {
		$(this).toggleClass('border');
	});

	$("ul li").click(function() {
		$(this).toggleClass('kitty');
	});
});