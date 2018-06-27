//右侧划上事件
// $(".rightlink li a").hover(function() {
//     $(this).siblings().show()
// }, function() {
//     $(this).siblings().hide()
// });
//向上点击事件
$(".gotoplink").click(function() {
        $("html,body").animate({
            "scrollTop": '0'
        }, 500);
    })
    //菜单点击效果
$("header .navbtn").click(function() {
    if ($(".navwrap").css("display") === "none") {
        $(".navwrap").slideDown();
        $("body").height($(window).height()).css("overflow", "hidden");
    } else {
        $(".navwrap").slideUp();
        $("body").css("overflow", "auto");
        $("header .navwrap .nav .subnav").hide()
    }
});
//二级导航点击效果
$("header .navwrap .nav li").click(function() {
        event.stopPropagation();
        $(this).find(".subnav").slideToggle();
    })
    //PC登录提示
$(".linkbtn").click(function() {
    $(".forpcpop").show().delay(2000).hide(300);
});
$(window).click(function(e) {
    if (!$(e.target).is(".navbtn") && !$(e.target).is(".nav")) {
        $(".navwrap").slideUp();
        $("body").css("overflow", "auto");
    }
});
//轮播
function slide(name, width, height) {
    if ($(name).children().length > 1) {
        $(name).slidesjs({
            width: width,
            height: height,
            navigation: false,
            play: {
                auto: true,
                restartDelay: 2000
            },
            callback: {
                complete: function(number) {
                    clearTimeout(slideTimer)
                    var slideTimer = setTimeout(function() {
                        $(".slidesjs-play").click();
                    }, 5000)
                }
            }
        });
    }
}