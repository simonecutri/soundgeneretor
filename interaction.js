
$( document ).ready(function() {




// Funzione per cambiare colore al muoversi del mouse
	$( document ).on( "mousemove", function( event ) {

		var width = $(window).width();
		var height = $(document).height();

		var mouseX = event.pageX;
		var mouseY = event.pageY;

		var relWidth = parseInt(mouseX / width * 360);
		var relHeight = parseInt(mouseY / height * 100);

		var variableColor = ( "hsl(" + relWidth + "," + mouseY + "% ," + (93 - relHeight) + "% )");

		if ( $(window).width() > 720 ){
			$(".box-color").css("background-color", variableColor);
			$("nav a.active, nav a:hover").css("border-color", variableColor);
		}
		$(".arrow-prev div").css("background-color", variableColor);
		$(".arrow-next div").css("background-color", variableColor);
		$(".contact-title").css("color", variableColor);

		$(window).resize(function() {
			var width = $(window).width();
			var height = $(window).height();
		});

	});




// Funzione per slideshow (freccia a destra / freccia a sinistra)
	$('.arrow-next').click(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		if(nextSlide.length === 0) {
			nextSlide = $('.slide').first();
		}

		currentSlide.fadeOut(500).removeClass('active-slide');
		nextSlide.fadeIn(500).addClass('active-slide');

	// Adatta l'altezza dello slider all'altezza dell'immagine
		var h = $(".active-slide img").height();
		$(".slider").css("height", h + 30);

	// Adatta la freccia a destra rispetto alla larghezza dell'immagine
		var sliderWidth = $(".active-slide").width();
		$(".arrow-next").css("left", sliderWidth - 34);
	});




	$('.arrow-prev').click(function() {
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		if(prevSlide.length === 0) {
			prevSlide = $('.slide').last();
		}

		currentSlide.fadeOut(500).removeClass('active-slide');
		prevSlide.fadeIn(500).addClass('active-slide');

	// Adatta l'altezza dello slider all'altezza dell'immagine
		var h = $(".active-slide img").height();
		$(".slider").css("height", h + 30);

	// Adatta la freccia a destra rispetto alla larghezza dell'immagine
		var sliderWidth = $(".active-slide").width();
		$(".arrow-next").css("left", sliderWidth - 34);
	});




// Adatta la freccia a destra rispetto alla larghezza dell'immagine
	
	
	$(window).on("load", function() {

	// Adatta l'altezza dello slider all'altezza dell'immagine
		var h = $(".active-slide img").height();
		$(".slider").css("height", h + 30);

	// Adatta la freccia a destra rispetto alla larghezza dell'immagine
		var sliderWidth = $(".active-slide").width();
		$(".arrow-next").css("left", sliderWidth - 34);
		
	});



});
