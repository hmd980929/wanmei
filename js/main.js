require.config({
    paths: {
        // 自定义模块的名字: 引入模块的路径
        "jquery": "jquery-1.10.1.min",
        "jquery-cookie": "jquery.cookie",
        "topAnimate": "topAnimate",
        "banner": "banner",
        "ajax": "ajax",
        "register": "register",
        "login": "login",
        "product": "product",
        "shopcar": "shopcar"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        // "parabola": {
		// 	exports: "_"
		// }
    }
})

require(["topAnimate","banner","ajax","register","login","product","shopcar"], function(top,banner,ajax,register,login,product,shopcar){
    top.shopCar();
    top.select_menu();
    top.search();

    banner.banner();

    ajax.ajax();
    ajax.sidebar();

    register.register();

    login.login();

    product.product();
    product.big();

    shopcar.ajax();
    shopcar.shopcar();
})  