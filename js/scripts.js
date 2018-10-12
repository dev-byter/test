$(document).ready(function(){
    $('.widget-plan__name .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        onChanged : function(event){
            console.log(event)
            if(event.item.index != null){
                $('.widget-plan__list-event .active').animate({'opacity': 0}, 100, function(){
                    $(this).removeClass('active').hide();
                    $('.widget-plan__list-event ul:eq('+event.item.index+')').show().addClass('active').animate({opacity: 1}, 100)
                });
            }
        }
    })


    $("#widget-plan__month-slider").slider({
        orientation: "horizontal",
        range: "min",
        max: 12,
        value: 3,
    })
});