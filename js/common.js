//右侧划上事件
$(".rightlink li a").hover(function() {
    $(this).siblings().show()
}, function() {
    $(this).siblings().hide()
});
//向上点击事件
$(".gotoplink").click(function() {
    $("html,body").animate({
        "scrollTop": '0'
    }, 500);
})