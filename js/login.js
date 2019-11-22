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
                        $.cookie("user",null);
                            var arruser = [{user:oUsername.val()}];
                            $.cookie("user",JSON.stringify(arruser),{
                                expires:7
                        });
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