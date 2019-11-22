define(["jquery"],function($){
    function shopCar(){
        // 实现购物车下拉动画
        $(".shopCar").mouseenter(function(){
            $(".cart_list").stop(true).animate({
                height:105
            },500)
        })
        .mouseleave(function(){
            $(".cart_list").stop(true).animate({
                height:0
            },500)
        })

        var cookieStr = $.cookie("user");
        if(cookieStr){
            var cookieArr = JSON.parse(cookieStr);
            var username = cookieArr[0].user;
            $("#yonghu").html(`您好,${username}`);
        }
    }
    function select_menu(){
        // 实现下拉菜单
        $(".menu").mouseenter(function(){
            $(".menu p,.menu p span").css({
                "background":"#e32332",
                "color":"white"
            })
            $(".menu .select_menu li").css("display","block");
            $(".menu .select_menu li").on("mouseenter",".ellipsis2",function(){
                $(this).off();
                $(this).css({
                    "background":"#f5f5f5",
                    "color":"#e90404"
                })
                $(this).find("em").css({
                    "backgroundPosition": "-60px 0"
                })
                $(this).siblings("dl").css({
                    "display":"block"
                })
                $(this).siblings("dl").stop(true).animate({
                    height:200
                },500)
            })
            $(".menu .select_menu li").on("mouseleave",function(){
                $(".ellipsis2").css({
                "background":"white",
                "color":"#474747",
                });
                $(this).find("em").css({
                    "backgroundPosition": "-54px 0"
                })
                $(this).find("dl").css({
                    "display":"none"
                })
                $(this).find("dl").stop(true).animate({
                    height:0
                },500)
            })
        })
        .mouseleave(function(){
            $(".menu p,.menu p span").css({
                "background":"white",
                "color":"#e32332"
            })
            $(".menu p").css({
                "color":"#474747"
            })
            $(".menu .select_menu li").css("display","none")
        })
    }
    function search(){
        // 搜索框获取焦点改变边框
        $(".search .cf .text").click(function(){
            $(this).attr("class","focus");
            $(this).siblings(".content").css("display","none");
        }) 
        $(".search .cf .text").blur(function(){
            if($(this).val()){
                $(this).attr("class","text");
                $(this).siblings(".content").css("display","none");
            }else{
                $(this).attr("class","text");
                $(this).siblings(".content").css("display","block");
            }
        }) 
    }
    // 对外暴露
    return {
        shopCar: shopCar,
        select_menu: select_menu,
        search: search
    }

});