$(".testimonial_slider_area").owlCarousel({

    items:5,
    // center:true,
    autoplay:true,
    autoPlayTimeout:5,
    autoplaySpeed:6000,
    autoHeight:true,
    autoplayHoverPause:false,
    loop:true,
    // smartSpeed:1000,
    margin:10,


    responsive:{
        320:{
            items:2
        },
        600:{
            items:3
        },
        776:{
            items:3
        },
        
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
})