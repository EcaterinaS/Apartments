$(function(){
    $('.slider').slick({
        nextArrow:'<button class="slick-arrow slick-right"><img src="./img/arrow-right.svg" alt="previos"></button>',
        prevArrow:'<button class="slick-arrow slick-left"><img src="./img/arrow-left.svg" alt="previos"></button>',
        fade:true, 
        responsive: [
            {
              breakpoint: 441,
              settings: {
                arrows:false
              }
            }
          ]
    });

});