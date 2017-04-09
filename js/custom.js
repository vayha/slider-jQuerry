$(function(){
    
    'use strict'




var slider = $('#slider');
var slideShow = $('.slide-show');
var slideCount = $('.single-slide').length; //metoda zwraca ilosc obiektów
var slideWidth = 100 / slideCount;
var slideIndex = 0;

slideShow.css('width', slideCount * 100 + '%');    

slideShow.find('.single-slide').each(function(index) {
        $(.single-slide).css('margin-left', slideShow *index + '%');  
     
     });
    

});
    


//$('h1').hide(5000).show(3000);
//    //pokaz ukryj animacja
//    
//    
//$('h2').fadeOut(5000).fadeIn(3000);

//slide();    
//function slide(){
//    $('h3').slideUp(5000).slideDown(3000, slide);
//}

//    var rand = Math.floor((Math.random() * 100));
//    
//$('h3').animate({'font-size' : '1em', 'margin-left' : rand + 'px'}, 2000, parBack);
//    
//    function parBack() {
//        $('p').css('background', 'red');
//    }
//    
