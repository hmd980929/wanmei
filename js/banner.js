define(["jquery"],function($){
    // banner图
    function banner(){
        var oUl = $(".header_banner").find(".slide");
        var aBtns = $(".header_banner").find(".hd").find("a");
        var oPrev = $(".header_banner").find(".prev");
        var oNext = $(".header_banner").find(".next");
        
        var iNow = 0; //默认让第0张图片显示
        var timer = null;

        // 点击圆点切换
        aBtns.click(function(){
            iNow = $(this).index();
            tab();
            return false;
        })

        // 点击左右切换
        oPrev.click(function(){
            if(iNow = 1){
                iNow--; 
                tab();
            }
            return false;
        })
        oNext.click(function(){
            if(iNow = 2){
                iNow--; 
                tab();
            }
            return false;
        })

        // 自动完成切换
        timer = setInterval(function(){
            iNow++;
            tab();
        },3000);

        $(".header_banner").hover(function(){
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

            oUl.stop(true).animate({left: -1349 * iNow}, 1000,function(){
                if(iNow == aBtns.size()){
                    oUl.css("left",0);
                    iNow = 0;
                }
            });
        }
    }
    // 对外暴露
    return {
        banner: banner
    }
});