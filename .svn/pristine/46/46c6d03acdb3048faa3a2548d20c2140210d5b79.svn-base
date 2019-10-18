define(["jquery"],function($){
    // product轮播图
    function product(){
        var oUl = $(".goods_detail .bd").find("ul");
        var aBtns = $(".goods_detail .hd").find("ul li");

        var iNow = 0; //默认让第0张图片显示
        var timer = null;

        // 点击图片切换
        aBtns.click(function(){
            iNow = $(this).index();
            tab();
            return false;
        })

        // 自动完成切换
        timer = setInterval(function(){
            iNow++;
            tab();
        },3000);

        oUl.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(function(){
                iNow++;
                tab();
            }, 3000);
        })

        aBtns.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(function(){
                iNow++;
                tab();
            }, 3000);
        })

        function tab(){
            aBtns.attr("class","").eq(iNow).attr("class","on");
            if(iNow == aBtns.size()){
                aBtns.eq(0).attr("class","on")
            }

            oUl.stop(true).animate({left: -430 * iNow}, 500,function(){
                if(iNow == aBtns.size()){
                    oUl.css("left",0);
                    iNow = 0;
                }
            });
        }
    }


    function big(){
        $("#small").mouseenter(function(){
            $("#mark,#big").css("display","block");
        }).mouseleave(function(){
            $("#mark,#big").css("display","none");
        }).mousemove(function(ev){
            var l = ev.pageX - $(this).offset().left - 75;
            var t = ev.pageY - $(this).offset().top - 75;
            if(l <= 0){
                l = 0;
            }
            if(l >= 280){
                l = 280;
            }

            if(t <= 0){
                t = 0;
            }
            if(t >= 280){
                t = 280;
            }

            //改变遮罩层的位置
            $("#mark").css({
                left: l,
                top: t
            })


            //同时放大图片的位置，四倍于遮罩层的位置，注意反方向的。
            $("#big img").css({
                left: -2 * l, 
                top: -2 * t
            })
        })
    }


    // 对外暴露
    return {
        product: product,
        big: big
    }
});