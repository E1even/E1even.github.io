/**
 * Created by HenryGe on 12/3/14.
 */
$(document).ready(function(){

    $("#btn_enter").css("display","block");
    $(".bar_in").animate({width:'100%'},11000,"linear");

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
        $(".parallax_content").animate({left:'150%'},100);
        $(".parallax_content1").animate({left:'55%'},1000);
    });
    $(".parallax_btn2").click(function(){
        $(".parallax_wrap").animate({top:'-100%'},"linear");
        $(".parallax_background").animate({top:'-100%'},"linear");
        $(".parallax_btns").removeClass("rotate120 rotate240 rotate360").addClass("rotate120");
        $(".parallax_content").removeClass("parallax_content_show");
        $(".parallax_content2").addClass("parallax_content_show");
        $(".parallax_content").animate({left:'150%'},100);
        $(".parallax_content2").animate({left:'55%'},1000);
    });
    $(".parallax_btn3").click(function(){
        $(".parallax_wrap").animate({top:'-200%'},"linear");
        $(".parallax_background").animate({top:'0'},"linear");
        $(".parallax_btns").removeClass("rotate120 rotate240 rotate360").addClass("rotate240");
        $(".parallax_content").removeClass("parallax_content_show");
        $(".parallax_content3").addClass("parallax_content_show");
        $(".parallax_content").animate({left:'150%'},100);
        $(".parallax_content3").animate({left:'55%'},1000);
    });


    //device
    $(".device_btn1").hover(function(){
        $(".device_btn_hover1").addClass("device_btn_hovered");
    },function(){
        $(".device_btn_hover1").removeClass("device_btn_hovered");
    }).click(function(){
            $(".device").removeClass("desktop laptop tablet").addClass("desktop");
            $(".device_display1").siblings().fadeOut();
            $(".device_display1").fadeIn();
            $(".device_btn1").find("div").addClass("device_btn_clicked").parent("li").siblings().children("div").removeClass("device_btn_clicked");
            $(".device_cards").slideUp();
            $(".device_card1").slideDown();
        });
    $(".device_btn2").hover(function(){
        $(".device_btn_hover2").addClass("device_btn_hovered");
    },function(){
        $(".device_btn_hover2").removeClass("device_btn_hovered");
    }).click(function(){
            $(".device").removeClass("desktop laptop tablet").addClass("laptop");
            $(".device_display2").siblings().fadeOut();
            $(".device_display2").fadeIn();
            $(".device_btn2").find("div").addClass("device_btn_clicked").parent("li").siblings().children("div").removeClass("device_btn_clicked");
            $(".device_cards").slideUp();
            $(".device_card2").slideDown();
        });
    $(".device_btn3").hover(function(){
        $(".device_btn_hover3").addClass("device_btn_hovered");
    },function(){
        $(".device_btn_hover3").removeClass("device_btn_hovered");
    }).click(function(){
            $(".device").removeClass("desktop laptop tablet").addClass("tablet");
            $(".device_display3").siblings().fadeOut();
            $(".device_display3").fadeIn();
            $(".device_btn3").find("div").addClass("device_btn_clicked").parent("li").siblings().children("div").removeClass("device_btn_clicked");
            $(".device_cards").slideUp();
            $(".device_card3").slideDown();
        });


    /*$("#dd").click(function(){
       $(".device").removeClass("desktop laptop tablet").addClass("desktop");
    });
    $("#ll").click(function(){
        $(".device").removeClass("desktop laptop tablet").addClass("laptop");
    });
    $("#tt").click(function(){
        $(".device").removeClass("desktop laptop tablet").addClass("tablet");
    });*/

});