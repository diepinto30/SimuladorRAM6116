$(document).ready(function(){
    $('.icon-chevron-up').click(function(){
        $('body, html').animate({scrollTop: '0px'}, 300);
    });
    
    $(window).scroll(function(){
       if($(this).scrollTop()>0){
          $('.icon-chevron-up').slideDown(300);
          }else{
              $('.icon-chevron-up').slideUp(300);
          } 
    });
    
    
           
});