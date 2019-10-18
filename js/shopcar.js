define(["jquery","jquery-cookie"],function($){
    function ajax(){
        //喜欢商品数据请求
        $.ajax({
            type:"get",
            url:"data/shopcar.json",
            success: function(arr){
                for(var i = 0; i < 6; i++){
                    var node = $(`<li>
                                    <a href="" target="#">
                                        <img src="${arr[i].img}" alt="" title="${arr[i].title}">
                                    </a>
                                    <p class="name ellipsis" title="${arr[i].title}">${arr[i].title}</p>
                                    <p class="price">${arr[i].price}</p>
                                    <div class="shop_btn" id="${arr[i].id}">加入购物车</div>
                                </li>`
                    );
                    node.appendTo(".like #like");
                }
            },
            error: function(msg){
                alert(msg)
            }
        })

    }


    function shopcar(){
        sc_num();
        sc_msg();

        //给加入购物车按钮添加点击事件
        $(".like").on("click", ".shop_btn", function(){
            $(".cart_null2").css("display","none");
            //取出当前按钮所在商品的id
            var id = this.id;
            /* 
                本地存储cookie(存储的必须是字符串)   4kb
                商品id和商品数量。
                本地存储商品的结果：[{id:id,num:1},{id:id,num:2}]
        
                cookie存储：键:goods  值：数据结构转成json格式字符串。
        
             */
            //判断是否是第一次存储
            var first = $.cookie("goods") == null ? true : false;
            if(first){
                //是第一次存储
                var arr = [{id: id, num: 1}];
                $.cookie("goods", JSON.stringify(arr), {
                    expires: 7
                })
            }else{
                //判断之前是否添加过
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                var same = false; //假设没有存储过
                //通过循环遍历是否有之前存储过的商品
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                        cookieArr[i].num++;
                        same = true;
                        break;
                    }
                }
        
                //判断如果没有添加过
                if(!same){
                    var obj = {id: id, num: 1};
                    cookieArr.push(obj);
                }
        
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })
                
            }

            sc_num();
            sc_msg();
        })
    

        
        //删除商品
        $(".shop").on("click", ".del", function(){
            //商品id
            var id = $(this).closest("tbody").attr("id");
            $(this).closest("tbody").remove();
            
                //1、删除页面上的节点
                //2、cookie存储的该数据删除

            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0; i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    cookieArr.splice(i, 1);
                    break;
                }
            }
    
            //存储数据到cookie的时候，判断数组是否为空
            if(cookieArr.length){
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })
            }else{
                $.cookie("goods", null);
            }

            // 当购物车里没有东西时，让购物车显示
            if(!$.cookie("goods")){
                $(".cart_null2").css("display","block");
                $("#checkoutPrice").html("0.00");
            }

            sc_num();
            sc_msg();

        })

    
        //加和减
        $("table").on("click", "tbody .number-input span", function(){
            //商品id
            var id = $(this).closest("tbody").attr("id");
            //取出对应cookie中的数据
            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0; i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    //要修改的数据
                   var goodObj = cookieArr[i];
                   break;
                }
            }
            if($(this).hasClass("plus")){
                goodObj.num++;
            }else{
                if(goodObj.num == 1){
                    alert("数量已经减到最小了！");
                }else{
                    goodObj.num--;
                }
            }
    
            //重新显示新的数量
            $(this).siblings("input").val(goodObj.num);
    
            $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            });
            sc_num();
            sc_msg();
    
        })
        
    
        /* 
            统计购物车里商品数量
         */
        function sc_num(){
            var cookieStr = $.cookie("goods");
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                var sum = 0;
                for(var i = 0; i < cookieArr.length; i++){
                    sum += cookieArr[i].num;
                }
                $("#checkoutNum").html(sum);
                $(".cart_null2").css("display","none");
            }else{
                $("#checkoutNum").html(0);
            }
        }




    
        /* 
            加载购物车
         */
        function sc_msg(){
            $("#goods").empty(); //清空所有子节点
            $.ajax({
                type: "get",
                url: "../data/shopcar.json",
                success: function(arr){
                    //取出cookie中的数据
                    var cookieStr = $.cookie("goods");
                    if(cookieStr){
                        var cookieArr = JSON.parse(cookieStr);
                        //找出加入购物车的商品数据
                        var newArr = [];
                        for(var i = 0; i < arr.length; i++){
                            for(var j = 0; j < cookieArr.length; j++){
                                if(arr[i].id == cookieArr[j].id){
                                    //增加购物车商品数量
                                    arr[i].num = cookieArr[j].num;
                                    newArr.push(arr[i]);
                                }
                            }
                        }
    
                        // console.log(newArr);
                        //每次加载数据的时候，都将上一次的数据清空
                        // $(".sc_right ul").html("");
                        $("thead").siblings().remove();
                        
                        for(var i = 0; i < newArr.length; i++){
                            var node = $(`<tbody id="${newArr[i].id}" class="tbody">
                                            <tr>
                                                <td class="state">
                                                    <span class="checkbox">
                                                        <input type="checkbox" checked="checked">
                                                        <label class="curr"></label>
                                                    </span>
                                                </td>
                                                <td>
                                                    <dl class="cf">
                                                        <dt class="left">
                                                            <a href="" target="_blank">
                                                                <img src="${newArr[i].img}" alt="" title="${newArr[i].title}">
                                                            </a>
                                                        </dt>
                                                        <dd class="left">
                                                            <h1 class="cf">
                                                                <a href="" class="name" target="_blank" title="${newArr[i].title}">${newArr[i].title}</a>
                                                            </h1>
                                                        </dd>
                                                    </dl>
                                                </td>
                                                <td>
                                                    <span class="amount number-input">
                                                        <span class="reduce left"></span>
                                                        <input class="left" id="0" type="text" value="${newArr[i].num}" min="1" maxlength="3" autocomplete="off">
                                                        <span class="plus left"></span>
                                                    </span>
                                                </td>
                                                <td class="price"><font id="rmbPrice_241">${newArr[i].price}</font></td>
                                                <td>
                                                    <a class="del">
                                                        <span></span>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>`);
                            if($("table").find("tbody").attr("class")){
                                node.appendTo("table");
                            }else{
                                node.insertAfter("thead");
                            }

                            
                        }


                        var sum = 0;
                        for(var i = 0; i < newArr.length; i++){
                            sum += parseFloat(newArr[i].price.slice(1)) * newArr[i].num;
                        }
                        sum += ".00";
                        $("#checkoutPrice").html(sum);
                        
                    }
                },
                error: function(msg){
                    console.log(msg);
                }
            })
            
        }
    }
    // 对外暴露
    return {
        ajax:ajax,
        shopcar:shopcar
    }
})


