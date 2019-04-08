$(document).ready(function(){

  //Cambiar fondo de la barra de menú al scrollear
  $(window).scroll(function() {
    if($(window).width() > 1024){
      if($(window).scrollTop() > 200 ) {
        $('nav').css("background", "rgba(4, 132, 159, 1");
      } else{
        $('nav').css("background", "rgb(0, 0, 0, 0)");
      }
    }
  });

  //Animación al clickear sobre enlace menú
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .stop().animate({scrollTop: targetOffset}, 1300, '');
       return false;
      }
    }
  });

  //Transformar menú hamburguesa en cruz al activar
  $('.button-nav-toggle').on('click', function(e) {
      e.preventDefault();
      var alturaNav = $('.menuBar').height();
      $(this).toggleClass('active');
      $('.navbar').css("height", "100vh");
      if($('.menuBar a').hasClass('active')){
        $('body').css("overflow-y", "hidden");
        $('.navbar').animate({
          left: '0',
          top: alturaNav,
          paddingTop: '7.5%',
        });
      }
      else{
        $('body').css("overflow-y", "auto");
        $('.navbar').animate({
          left: '-70%'
        });
      }
  });

  //Cerrar menú al cliquear en li y volver de la cruz al menú hamburguesa
  $('.navbar li a').click(function(){
    if($('.menuBar a').hasClass('active')){
      $('body').css("overflow", "auto");
      $('.navbar').animate({
        left: '-100%',
        top: '0',
        paddingTop: '0'
      });
      $('.menuBar a ').removeClass('active');
      $('.menuBar a ').addClass('button-nav-toggle');
    }
  });


  /*Abre el popup*/
  $('a[href*=contacto]').click(function(e){
    e.preventDefault();
    var altura = $('body').height();
    $('#popup').css("height", altura + "px");
    $('#popup').fadeIn(1000);
    $('html').css("overflow", "hidden");
    if($(window).width() > 1024){
      var alturaNav = $('nav').height() + 5;
      $('.navbar').slideUp();
      $('#form').animate({
        top: alturaNav
      });
    }
    else{
      var alturaNav = $('.menuBar').height() + 50;
      $('.menuBar').slideUp();
      $('#form').animate({
        top: alturaNav
      });
    }
  });


  //Al presionar "Cancelar" en el formulario
  $('#cancel').click(function(e){
    e.preventDefault();
    $('#popup').fadeOut(1000);
    $('html').css("overflow", "auto");
    if($(window).width() > 1024){
      $('.navbar').slideDown();
    }
    else{
      $('.menuBar').slideDown();
    }
  });



  /*Hover sobre campos del formulario*/
  $('.field').mouseenter(function(){
    $(this).animate({
      width : '90%'
    });
  });
  $('.field').focus(function(){
    $(this).animate({
      width : '90%',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none'
    });
  });
  $('.field').mouseout(function(){
    $(this).animate({
      width : '85%'
    });
  });
});