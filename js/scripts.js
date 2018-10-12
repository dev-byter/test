$(document).ready(function(){
    $('.widget-plan__name .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        onChanged : function(event){
            if(event.item.index != null){
                $('.widget-plan__list-event .active').animate({'opacity': 0}, 100, function(){
                    $(this).removeClass('active').hide();
                    $('.widget-plan__list-event ul:eq('+event.item.index+')').show().addClass('active').animate({opacity: 1}, 100)
                });
            }
        }
    });


    $("#widget-plan__month-slider").slider({
        orientation: "horizontal",
        range: "min",
        max: 12,
        value: 3,
    });

    $('#showCart').click(function(){
        $('.order-block').slideToggle(400);
        return false;
    });

    $('.style-number__btn>div').click(function(){
        var _number = $(this).closest('.style-number').find('input').get(0);

        if($(_number).prop('disabled')){
            return;
        }

        if($(this).hasClass('minus')){
            $(_number).val(parseFloat($(_number).val())-1);
        }else  if($(this).hasClass('plus')){
            $(_number).val(parseFloat($(_number).val())+1);
        }
    });

    $(".order-block .close").click(function(){
        $(this).closest('.item').animate({opacity: 0}, 200, function(){
            $(this).remove();

            if($('.order-block .list-unit .item').get().length <= 0) $(".order-block .list-unit").hide();
        })
    })
});