$(function(){
    var copyright_date = new Date();
    //获取当前年
    var copyright_year=copyright_date.getFullYear();
    $(".year").html(copyright_year);

    // 判断游览器的类型是否为ie6 7 8 9
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    }
    if ((/msie [9|10]/i.test(navigator.userAgent))){
        // $(".c4conboxstep").show();
        // $(".c4conbox").css({
        //     borderWidth: '1px',
        //     borderStyle: 'dashed',
        //     borderColor: '#b4daf8'
        // })
    }

    var wow = new WOW({
        boxClass: 'wow', 
        animateClass: 'animated', 
        offset: 20, 
        mobile: true, 
        live: true 
    })
    //增加wow方法
    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                    callback();
                }
            });
            return this;
        }
    });
    $('.details').mouseenter(function(){
        $(this).animateCss('shake');
    })

	//返回顶部
	$(".fixedtop").click(function(){
                $("html,body").animate({scrollTop:0}, 500);
    })
    // a href 对应跳转位置的id
    $('.fixed a,.banner_box a').click(function () {
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
        });
    // top的固定
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop>1200){
            $(".zgHead").addClass('fixed');
        }else{
            $(".zgHead").removeClass('fixed');
        }
    })

    $(".hjul li").each(function(index){
        $(this).mouseenter(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".scien_inner").hide().eq(index).slideDown(500);
        })
    })
    $(".nav .item").each(function(index){
        $(this).mouseenter(function(){
            $(this).addClass('hover').siblings('.item').removeClass('hover');
             $(".text").hide().eq(index).fadeIn(200);
        })
    })
    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".zgm1").offset().top},600);
    });

    // alert 示例
    $(".ss").click(function(){
        Ealt.Etoast('暂未开通，敬请期待',2);
        return false;
    });
})

