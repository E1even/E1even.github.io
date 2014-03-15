/**
 * Created by HenryGe on 12/3/14.
 */
$(document).ready(function(){

    //initial pages
    $(".page_middle").nextAll().addClass("page_bottom");
    $(".page_middle").prevAll().addClass("page_top");

    $(".my_name").css("top","10%").animate({top:'40%'},700);

    //page up&down
    $(".btn_up").click(function(){
        $(".page").addClass("page_load");
        $(".page_middle").animate({top:'100%'}).removeClass("page_middle").prev().addClass("page_middle");
        $(".page_middle").animate({top:'0'}).removeClass("page_top");
        $(".page_middle").nextAll().addClass("page_bottom");
        $(".page_middle").prevAll().addClass("page_top");
    });
    $(".btn_down").click(function(){
        $(".page").addClass("page_load");
        $(".page_middle").animate({top:'-100%'}).removeClass("page_middle").next().addClass("page_middle");
        $(".page_middle").animate({top:'0'}).removeClass("page_bottom");
        $(".page_middle").nextAll().addClass("page_bottom");
        $(".page_middle").prevAll().addClass("page_top");
    });

    //page load effects
    $(".btn_up").click(function(){
        //$(".parallax_btns").removeClass("rotate120 rotate240 rotate360");
        if($(".page_cover").next().css("top")=="0px")
        {
           $(".my_name").css("top","10%").animate({top:'40%'},1000);
        }
        else if($(".page_parallax").next().css("top")=="0px")
        {
            //$(".parallax_btns").removeClass("rotate120 rotate240 rotate360").addClass("rotate360");
        }
    });
    $(".btn_down").click(function(){
        //$(".parallax_btns").removeClass("rotate120 rotate240 rotate360");
        if($(".page_cover").prev().css("top")=="0px")
        {
            $(".my_name").css("top","10%").animate({top:'40%'},1000);
        }
        else if($(".page_parallax").prev().css("top")=="0px")
        {
            //$(".parallax_btns").removeClass("rotate120 rotate240 rotate360").addClass("rotate360");
        }
    });

    //parallax
    $(".parallax_btn1").click(function(){
        $(".parallax_wrap").animate({top:'0'},"linear");
        $(".parallax_background").animate({top:'-200%'},"linear");
        $(".parallax_btns").removeClass("rotate120 rotate240 rotate360").addClass("rotate360");
        $(".parallax_content").animate({left:'100rem'},100);
        $(".parallax_content1").animate({left:'40rem'},1000);
    });
    $(".parallax_btn2").click(function(){
        $(".parallax_wrap").animate({top:'-100%'},"linear");
        $(".parallax_background").animate({top:'-100%'},"linear");
        $(".parallax_btns").removeClass("rotate120 rotate240 rotate360").addClass("rotate120");
        $(".parallax_content").removeClass("parallax_content_show");
        $(".parallax_content2").addClass("parallax_content_show");
        $(".parallax_content").animate({left:'100rem'},100);
        $(".parallax_content2").animate({left:'40rem'},1000);
    });
    $(".parallax_btn3").click(function(){
        $(".parallax_wrap").animate({top:'-200%'},"linear");
        $(".parallax_background").animate({top:'0'},"linear");
        $(".parallax_btns").removeClass("rotate120 rotate240 rotate360").addClass("rotate240");
        $(".parallax_content").removeClass("parallax_content_show");
        $(".parallax_content3").addClass("parallax_content_show");
        $(".parallax_content").animate({left:'100rem'},100);
        $(".parallax_content3").animate({left:'40rem'},1000);
    });

});