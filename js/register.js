$(function(){
	$("#btn").click(function(){
		var uname = $("#uname").val();
		var upass = $("#upass").val();
		var email = $("#email").val();
		var user_name = $("#name").val();
		var phone =$("#phone").val();
		var gender = $("#gender").val();
		$.ajax({
			type:"get",
			url:"Data/user/register.php",
			data:{uname:uname,upass:upass,email:email,
			phone:phone,gender:gender,user_name:user_name},
			success:function(data){
				if(data.code>0){
					alert("注册成功");
					location.href="login.html";
				}else{
					alert("注册失败,请重试");
					location.href="register.html";
				}
			}
		});
	});
})
function yanzheng(){
	var upass = $("#upass").val();
	var yanzheng = $("#mmyz").val();
	var yz = $("#yz");
	if(upass===yanzheng){
		yz.html("通过");
	}else{
		yz.html("密码不一致");
	}
}
function reqname(){
	var uname = $("#uname").val();
	var yz = $("#nyz");
	$.ajax({
		type:"get",
		url:"Data/user/reqname.php",
		data:{uname:uname},
		dataType:"json",
		success:function(data){
			if(data.code<0){
				yz.html(data.msg);
			}else{
				yz.html(data.msg);
			}
		},
		error:function(){
			console.log("错误");
		}
	})
}