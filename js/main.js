
	  $(document).ready(function(){
		$( "body" ).on( "click", ".open-modal", function(event) {
			event.preventDefault(event);
			var modal = $(this).attr('data-modal');
			var link = $(this).attr("data-link");
			$("#"+modal).fadeIn();
		    $('.bg-modal, .btn-fechar-modal, .modal').fadeIn();
		    $('.wrapper').html('<iframe src="http://www.youtube.com/embed/'+link+'?autoplay=1" width="100%" height="296" frameborder="0" allowfullscreen></iframe>');
		});

		//--- Fecha o  modal ------------------------------
		$("body").on("click", '.btn-fechar-modal, .bg-modal', function(event){
				$('.modal, .bg-modal, .btn-fechar-modal').fadeOut("slow");
  				setTimeout(function() {
				    $('.wrapper').html('');
				}, 1000);
				event.preventDefault(event);
			});
		});

