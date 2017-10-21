
	  $(document).ready(function(){
		$( "body" ).on( "click", ".open-modal", function(event) {
			event.preventDefault(event);
			var modal = $(this).attr('data-modal');
			$("#"+modal).fadeIn();
		    $('.bg-modal, .btn-fechar-modal, .modal').fadeIn();
		});

		//--- Fecha o  modal ------------------------------
		$("body").on("click", '.btn-fechar-modal, .bg-modal', function(event){
				$('.modal, .bg-modal, .btn-fechar-modal').fadeOut("slow");
				event.preventDefault(event);
				//$('.modal').css('top','-299px');
			});
		});
	  function download_ebook3(){
			var email = $('#ebook-coaching-de-emagrecimento input[name="your-email"]').val();
			$('#ebook-coaching-de-emagrecimento .box-download span.email').html(email);
			$('#ebook-coaching-de-emagrecimento .content-form').hide();
			$('#ebook-coaching-de-emagrecimento .box-download').delay(300).fadeIn();
		}
