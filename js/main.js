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
    
    $(function(){
        $('#call').click(function(){
            window.location.href = "call:0468946283";
        });
    });
});