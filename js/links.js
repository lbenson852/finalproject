$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    // center: true,
    loop:true,
    dots: true,
    dotElement: 'button role="button" aria-labelledby="my-element-{n}"',
    // autoWidth:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        800:{
            items:5,
            nav:true,
            loop:false
        }
    }
});
$('.owl-carousel').each(function() {
    //Find each set of dots in this carousel
  $(this).find('.owl-dot').each(function(index) {
    //Add one to index so it starts from 1
    $(this).attr('aria-label', index + 1);
  });
});
});
