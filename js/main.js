$(document).ready(function(){
    $(function() {
      $('a[href^="#"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1200, 'easeInOutCubic');
            return false;
          }
        }
      });
    });
    
    $(function(){
        $('.navbar-toggle').on('click', function(){
            $(this).toggleClass("active");
        });
    });

    // Scroll shrink navbar
    $(window).scroll(function(){
        if($(document).scrollTop() > 50){
            $('.navbar-default').removeClass('fade');
        }else{
            $('.navbar-default').addClass('fade');
        }
    });
    
    // Scroll reveal gallery
    window.sr = ScrollReveal();
    sr.reveal('.portfolio-box', { duration: 400, scale:.3, distance:"0px" });
});