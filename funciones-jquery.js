$(document).ready(function() {
     $('.addClass').click(function(){
     $('.add').addClass('red');
     });
     $('.removeClass').click(function(){
     $('.add').removeClass('red');
     });
     $('.slideToggle').click(function(){
     $('#sToggle').slideToggle();
     });
     $('.app').click(function(){
     $('.append').append(" Bienvenidos a Coding Dojo!!!");
     });
     $('.pin').click(function(){
     $('.click').html(" Usted hizo clic en el titulo!!!");
     });
     $('.clicked').click(function(){
     $('.click').html(" Usted hizo clic en el Botón!!!");
     });
     $('.show').click(function(){
     $('.ghost').show(1000);
     });
     $('.hide').click(function(){
     $('.ghost').hide(1000);
     });
     $('.toggles').click(function(){
     $('.toggle').toggle();
     });
     $('.slideUp').click(function(){
     $('.slideUpDown').slideUp();
     });
     $('.slideDown').click(function(){
     $('.slideUpDown').slideDown();
     });
     $('.ocultar').click(function(){
     $('.fadeInOut').fadeIn();
     });
     $('.fades').click(function(){
     $('.fadeInOut').fadeOut();
     });
     $('.before').click(function(){
     $('.antes').before('<i>“Que la fuerza te acompañe” Han Solo....</i>\n');
      });
     $('.after').click(function(){
     $('.despues').after('<i>“Me encanta el olor del napalm por la mañana”....</i>\n');
     });
     $('.append').click(function(){
     $('.appfin').append(`<i>
     "¿Me estás hablando a mi?” Travis Bickle."</i>\n`);
     });
     $('.prepend').click(function(){
     $('.antfin').prepend('<i> Hello Coding Dojo!!!</i>\n');
     });
     $('.html').click(function(){
     $('.htmls').html('<strong><i> Full stack Coding Dojo!!!</i></strong>\n');
     });
     $('.attr').click(function(){
     $('.atributo').html('<i> Full stack Javascript Coding Dojo!!!</i>\n');
     });
    $('.val').click(function(){
    $('input:text').val("Full Stack CodingDojo");
    });
     $('.text').click(function(){
     $('.texto').text("“Le voy a hacer una oferta que no podrá rechazar” Vito Corleone.");
     });

 });