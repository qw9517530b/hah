$(function(){
    $("#login").click(function () {
        var name = $("#name").val();
        var pass = $("#pass").val();
        $.ajax({
            type:"post",
            url:"Data/user/login.php",
            data:{uname:name,upass:pass},
            success:function (data) {
                 if(data==="1"){
                     alert("登录成功");
                     location.href="index.html"
                    // location.href="login.html"
                 }else{
                     alert("登录失败,请重试");
                 }
            }
        });
    })
})