/**
 * Created by yerongtao on 2017/5/1.
 */

$(document).ready(function(){
    tagscloud();//标签云效果
    tagsCloudColor();//给标签云设置随机背景色
    loadMapJScript();//异步加载地图


    $(".owl-carousel").owlCarousel({//轮播广告图效果
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });


    function tagsCloudColor() {
        var tagsCloud=document.getElementById('tagscloud');
        var aA=tagsCloud.getElementsByTagName('a');
        for(i=0;i<aA.length;i++) {
            aA[i].style.backgroundColor=getRandomColor();
        }
    }
    function getRandomColor(){
        var rgb='rgb('+Math.floor(Math.random()*255)+','
            +Math.floor(Math.random()*255)+','
            +Math.floor(Math.random()*255)+')';
        // console.log(rgb);
        return rgb;
    }



});

//index页面师资团队轮播效果
$(function () {
    var
        $ul = $(".c-teacher-info").find("ul"),
        toMoveRight,
        curDotIndex = 4,
        transitionStatus;

    $(window).resize(function () {
        $ul.attr('style', '');            //动画前后，变化的是标签内style属性 所以直接消除掉style即可
        scaleImage(4);
        $(".c-t-dot-s").removeClass("d_c_dot_s");
        $(".c-t-dot").find("li").eq(4).addClass("d_c_dot_s");
    });

    /*$(window).scroll(function () {
        if ($(window).scrollTop() > $(".container").height() / 2) {
            scaleImage(4);
        }
    });*/

    function scaleImage(index) {
        if (document.body.clientWidth < 600) {
            return;
        }
        $li = $ul.children();
        $li.siblings(".centerify").removeClass("centerify");
        $li.siblings(".sideify").removeClass("sideify");
        $li.eq(index + 1).addClass("sideify");
        $li.eq(index).addClass("centerify");
        $li.eq(index - 1).addClass("sideify");
    }

    //设置圆点index
    function setDot(flag) {
        $(".c-t-dot-s").removeClass("c-t-dot-s");
        curDotIndex = flag ? (curDotIndex == 8 ? 0 : curDotIndex + 1) : (curDotIndex == 0 ? 8 : curDotIndex - 1);
        $(".c-t-dot").find("li").eq(curDotIndex).addClass("c-t-dot-s");
    }

    //动画结束回调
    function transitionEndCallback() {
        $ul[0].style.transitionDuration = "0s";
        $ul[0].style.transform = "";
        toMoveRight ? $ul.children().last().before($ul.children().first()) : $ul.children().first().before($ul.children().last());
        $ul[0].removeEventListener("webkitTransitionEnd", transitionEndCallback);
        transitionStatus = false;
    }

    //移动
    function move(e) {
        if (transitionStatus) {
            return;
        }

        var liCssWidth = $ul.children().css("width");

        transitionStatus = true;

        toMoveRight = !!e.data.toMoveRight;

        $ul[0].style.transitionDuration = "0.5s";

        $ul[0].style.transform = toMoveRight ? "translateX(-" + liCssWidth + ")" : "translateX(" + liCssWidth + ")";

        scaleImage(toMoveRight ? 5 : 3);

        setDot(toMoveRight);

        $ul[0].addEventListener('webkitTransitionEnd', transitionEndCallback);
    }

    //向左滑动按钮

    $(".c-t-left").click({toMoveRight: false}, move);
    $(".c-t-right").click({toMoveRight: true}, move);


});
