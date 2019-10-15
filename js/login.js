define(["jquery"],function($){
    function login(){
        var oUsername = $("#username");
        var oPassword = $("#password");
        var oPassword_p = $("#password_p");
        var oLogin = $("#login_btn");

        oLogin.click(function(){
            $.ajax({
                type: "post",
                url: "login.php",
                data: {
                    username: oUsername.val(),
                    password: oPassword.val(),
                },
                success: function(result){
                    var obj = JSON.parse(result);
                    if(obj.code){
                        oPassword_p.css("color","red");
                    }else{
                        oPassword_p.css("color","green");
                        open("index.html");
                    }
                    oPassword_p.html(obj.message);
                    oPassword_p.css("display","block");
                },
                error: function(msg){
                    alert(msg);
                }
            })
        }) 
    }
    // 对外暴露
    return {
        login: login
    }
})