define(["jquery","jquery-cookie"],function($){
    function ajax(){
        //ad数据请求
        $.ajax({
            type:"get",
            url:"data/index.json",
            success: function(arr){
                for(var i = 0; i < arr[0].banner.length; i++){
                    var node = $(`
                        <a href=""target="_blank" class="">
                            <img src="${arr[0].banner[i].img}" title="${arr[0].banner[i].title}" alt="${arr[0].banner[i].title}">
                        </a>`
                    );
                    node.appendTo(".buying .ad_list");
                }
            },
            error: function(msg){
                alert(msg)
            }
        })

        // 请求dota2数据
        $.ajax({
            type:"get",
            url:"data/index.json",
            success: function(arr){
                var node1 = $(`<a href="" target="_blank" class="left ad">
                                    <img src="${arr[0].dota2[0].left}" >
                                </a>`
                                );
                node1.insertBefore(".dota2_area .tempWrap");

                var node2 = $(`<div class="area_slide dota_slide left">
                                    <a href="" target="_blank">
                                        <img src="${arr[0].dota2[0].banner}">
                                    </a>
                                </div>`
                                );
                node2.appendTo(".dota2_area .main");

                for(var i = 0; i < arr[0].dota2[0].goods.length; i++){
                    var node3 = $(`<div class="product-item list">
                                        <a href="" target="_blank">
                                            <img src="${arr[0].dota2[0].goods[i].img}" alt="" title="${arr[0].dota2[0].goods[i].title}">
                                        </a>
                                        <p class="name ellipsis" title="${arr[0].dota2[0].goods[i].title}">${arr[0].dota2[0].goods[i].title}</p>
                                        <p class="price">¥${arr[0].dota2[0].goods[i].price}</p>
                                    </div>`
                                    );
                    node3.appendTo(".dota2_area .main");
                }
                $(".dota2_area .main .list:nth-child(3)").css("marginRight","0");
                $(".dota2_area .main .list:nth-child(7)").css("marginRight","0");
            },
            error: function(msg){
                alert(msg)
            }
        })

        //请求电竞外设专区数据
        $.ajax({
            type:"get",
            url:"data/index.json",
            success: function(arr){
                var node1 = $(`<a href="" target="_blank" class="left ad">
                                    <img src="${arr[0].out[0].left}" >
                                </a>`
                                );
                node1.appendTo(".out_area .cf");

                for(var i = 0; i < arr[0].out[0].goods.length; i++){
                    var node2 = $(`<div class="product-item list">
                                        <a href="" class="like "><span></span><font>${arr[0].out[0].goods[i].font}</font></a>
                                        <a href="" target="_blank">
                                            <img src="${arr[0].out[0].goods[i].img}" alt="${arr[0].out[0].goods[i].title}" title="${arr[0].out[0].goods[i].title}">
                                        </a>
                                        <p class="name ellipsis is-truncated" title="${arr[0].out[0].goods[i].title}">${arr[0].out[0].goods[i].title}</p>
                                        <p class="price">¥${arr[0].out[0].goods[i].price}
                                                <del>${arr[0].out[0].goods[i].del}</del>
                                        </p>
                                    </div>`
                                    );
                    node2.appendTo(".out_area .cf");
                }
                $(".out_area .cf .list:nth-child(5)").css("marginRight","0");
                $(".out_area .cf .list:nth-child(9)").css("marginRight","0");
            },
            error: function(msg){
                alert(msg)
            }
        })

        // 请求完美世界周边数据
        $.ajax({
            type:"get",
            url:"data/index.json",
            success: function(arr){
                var node1 = $(`<a href="" target="_blank" class="left ad">
                                    <img src="${arr[0].perfect[0].left}" >
                                </a>`
                                );
                node1.insertBefore(".perfect_area .tempWrap");

                var node2 = $(`<div class="area_slide dota_slide left">
                                    <a href="" target="_blank">
                                        <img src="${arr[0].perfect[0].banner}">
                                    </a>
                                </div>`
                                );
                node2.appendTo(".perfect_area .main");

                for(var i = 0; i < arr[0].perfect[0].goods.length; i++){
                    var node3 = $(`<div class="product-item list">
                                        <a href="" target="_blank">
                                            <img src="${arr[0].perfect[0].goods[i].img}" alt="" title="${arr[0].perfect[0].goods[i].title}">
                                        </a>
                                        <p class="name ellipsis" title="${arr[0].perfect[0].goods[i].title}">${arr[0].perfect[0].goods[i].title}</p>
                                        <p class="price">¥${arr[0].perfect[0].goods[i].price}
                                            <del>${arr[0].perfect[0].goods[i].del}</del>
                                        </p>
                                    </div>`
                                    );
                    node3.appendTo(".perfect_area .main");
                }
                $(".perfect_area .main .list:nth-child(3)").css("marginRight","0");
                $(".perfect_area .main .list:nth-child(7)").css("marginRight","0");
            },
            error: function(msg){
                alert(msg)
            }
        })

        // 请求csgo的数据
        $.ajax({
            type:"get",
            url:"data/index.json",
            success: function(arr){
                var node1 = $(`<a href="" target="_blank" class="left ad">
                                    <img src="${arr[0].csgo[0].left}" >
                                </a>`
                                );
                node1.appendTo(".csgo_area .cf");

                for(var i = 0; i < arr[0].csgo[0].goods.length; i++){
                    var node2 = $(`<div class="product-item list">
                                        <a href="" target="_blank">
                                            <img src="${arr[0].csgo[0].goods[i].img}" alt="${arr[0].csgo[0].goods[i].title}" title="${arr[0].csgo[0].goods[i].title}">
                                        </a>
                                        <p class="name ellipsis is-truncated" title="${arr[0].csgo[0].goods[i].title}">${arr[0].csgo[0].goods[i].title}</p>
                                        <p class="price">¥${arr[0].csgo[0].goods[i].price}</p>
                                        <div class="add">
                                            <div class="shop_btn" id="${arr[0].csgo[0].goods[i].id}">加入购物车</div>
                                        </div>
                                    </div>`
                                    );
                    node2.appendTo(".csgo_area .cf");
                }
                $(".csgo_area .cf .list:nth-child(5)").css("marginRight","0");
                $(".csgo_area .cf .list:nth-child(9)").css("marginRight","0");
            },
            error: function(msg){
                alert(msg)
            }
        })
    }
    
    // 请求姜小虎的数据
    $.ajax({
        type:"get",
        url:"data/index.json",
        success: function(arr){
            var node1 = $(`<a href="" target="_blank" class="left ad">
                                <img src="${arr[0].tiger[0].left}" >
                            </a>`
                            );
            node1.insertBefore(".tiger_area .tempWrap");

            var node2 = $(`<div class="area_slide dota_slide left">
                                <a href="" target="_blank">
                                    <img src="${arr[0].tiger[0].banner}">
                                </a>
                            </div>`
                            );
            node2.appendTo(".tiger_area .main");

            for(var i = 0; i < arr[0].tiger[0].goods.length; i++){
                var node3 = $(`<div class="product-item list">
                                    <a href="" target="_blank">
                                        <img src="${arr[0].tiger[0].goods[i].img}" alt="" title="${arr[0].tiger[0].goods[i].title}">
                                    </a>
                                    <p class="name ellipsis" title="${arr[0].tiger[0].goods[i].title}">${arr[0].tiger[0].goods[i].title}</p>
                                    <p class="price">¥${arr[0].tiger[0].goods[i].price}</p>
                                </div>`
                                );
                node3.appendTo(".tiger_area .main");
            }
            $(".tiger_area .main .list:nth-child(3)").css("marginRight","0");
            $(".tiger_area .main .list:nth-child(7)").css("marginRight","0");
            $(".tiger_area .main .list:nth-child(4) a").attr("href","product.html");
        },
        error: function(msg){
            alert(msg)
        }
    })

    // 获取评论的数据
    $.ajax({
        type:"get",
        url:"data/index.json",
        success: function(arr){
            for(var i = 0; i < arr[0].comment.length; i++){
                var node = $(`<li class="">
                                    <a href="" target="_blank">
                                        <img src="${arr[0].comment[i].img}" alt="" title="" class="left">
                                        <div class="left info">
                                            <div class="text ellipsis" title="${arr[0].comment[i].title}" ">${arr[0].comment[i].title}</div>
                                            <p class="from"><span></span>来自于<font>${arr[0].comment[i].from}</font></p>
                                            <p class="name ellipsis is-truncated" title="" "><span class="suffix">¥${arr[0].comment[i].price}</span></p>
                                        </div>
                                    </a>
                                </li>`
                                );
                node.appendTo(".hot_comment ul");
            }
            $(".hot_comment ul li:nth-child(3)").css("marginRight","0");
            $(".hot_comment ul li:nth-child(6)").css("marginRight","0");
        },
        error: function(msg){
            alert(msg)
        }
    })

    //侧边栏
    function sidebar(){
        //加载侧边栏
        $.ajax({
            type: "get",
            url: "data/sidebar.json",
            success: function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node1 = $(`
                    <li class="li"><a href="">${arr[i].data[0].top1}</a><i>/</i><a href="">${arr[i].data[1].top2}</a></li>
                    `);
                    node1.appendTo("#goodslist-ul");
                }
            },
            error: function(msg){
                alert(msg)
            }
        })
        //li的划入事件
        $("#goodslist-ul").on("mouseenter",".li",function(){
            $(this).css("background","#684b34");
            $("#goods-div").html("");
            var j = $(this).index() - 1;
            $("#goods-div").css("display","block");
            //划入加载对应top1和top2
            $.ajax({
                type: "get",
                url: "data/sidebar.json",
                success: function(arr){
                    var nodelist1 = $(`
                    <div class="div1">
                        <p class="p1">${arr[j].data[0].top1}</p>
                        <ul class="ul1">
                        </ul>
                    </div>
                    <div class="div2">
                        <p class="p2">${arr[j].data[1].top2}</p>
                        <ul class="ul2">
                        </ul>
                    </div>
                    `);
                    nodelist1.appendTo("#goods-div");
                },
                error: function(msg){
                    alert(msg)
                }
            })
            //划入加载top1数据
            $.ajax({
                type: "get",
                url: "data/sidebar.json",
                success: function(arr){
                    for(var i = 0; i < arr[j].data[0].list.length; i++){
                        var nodetop1 = $(`
                            <li><img src="${arr[j].data[0].list[i].img}" alt=""><span>${arr[j].data[0].list[i].title}</span></li>
                        `);
                        
                        nodetop1.appendTo("#goods-div .div1 .ul1");

                    }
                },
                error: function(msg){
                    alert(msg)
                }
            })
            //划入加载top2数据
            $.ajax({
                type: "get",
                url: "data/sidebar.json",
                success: function(arr){
                    for(var i = 0; i < arr[j].data[1].list.length; i++){
                        var nodebot1 = $(`
                            <li><img src="${arr[j].data[1].list[i].img}" alt=""><span>${arr[j].data[1].list[i].title}</span></li>
                        `)
                        
                        nodebot1.appendTo("#goods-div .div2 .ul2");

                    } 
                },
                error: function(msg){
                    alert(msg)
                }
            })
        })
        //鼠标划出事件
        $("#goodslist-ul").on("mouseleave",".li",function(){
            $(this).css("background","");
        })
        $("#goodslist-ul").on("mouseleave",function(){
            $("#goods-div").css("display","none");
        })
        $("#goods-div").on("mouseleave",function(){
            $("#goods-div").css("display","none");
            $("#goods-div").html("");
        })
    }


    // 对外暴露
    return {
        ajax: ajax,
        sidebar: sidebar
    }
});