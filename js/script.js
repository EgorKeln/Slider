$(document).ready(function(){
    $('.slider').slick({
        dots:true, 
        adaptiveHeight:false, 
        slidesToShow:9, 
        speed:1000, 
        easing:'ease', 
        autoplay:false, 
        autoplaySpeed:2000, 
        pauseOnFocus:true, 
        pauseOnHover:true, 
        pauseOnDotsHover:true, 
        touchThreshold:20, 
        centerMode:true, 
        asNavFor:".sliderbig",
        responsive:[
            {
                breakpoint: 1568,
                settings: {
                    slidesToShow:8
                }
            },{
                breakpoint: 1400,
                settings: {
                    slidesToShow:7
                }
            },{
                breakpoint: 1236,
                settings: {
                    slidesToShow:6
                }
            },{
                breakpoint: 1078,
                settings: {
                    slidesToShow:5
                }
            },{
                breakpoint: 922,
                settings: {
                    slidesToShow:3
                }
            },{
                breakpoint: 764,
                settings: {
                    slidesToShow:3
                }
            },{
                breakpoint: 602,
                settings: {
                    slidesToShow:2
                }
            },{
                breakpoint: 440,
                settings: {
                    slidesToShow:1
                }
            }
        ],   
    });

    $('.sliderbig').slick({
        pauseOnFocus:true, 
        pauseOnHover:true, 
        pauseOnDotsHover:true, 
        swipe:false, 
        arrows:false,
        fade:true, 
        asNavFor:".slider",
        centerMode:true
        
    });

});