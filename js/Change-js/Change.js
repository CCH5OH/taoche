$(function() {
	//姓名验证
	$("#usedcars_name").keyup(function() {
		var $value = this.value;
		var $reg = /^[\u4e00-\u9fa5]+$/;
		if($value.match($reg)) {
			$("#usedcars_neme_tips").html("匹配正确").css("color", "green");
		} else {
			$("#usedcars_neme_tips").html("请输入姓名").css("color", "red");
		}
	})
	//手机号验证
	$("#usedcars_phone").keyup(function() {
		var $value = this.value;
		var $reg = /^[1][3-8][0-9]{9}$/;
		if($value.match($reg)) {
			$("#usedcars_phone_tips").html("匹配正确").css("color", "green");
		} else {
			$("#usedcars_phone_tips").html("请输入手机号").css("color", "red");
		}
	})
	//获取验证码
	$("#usedcars_verifica").keyup(function() {
		var $value = this.value;
		var $reg = /^[\d]{6}$/;
		if($value.match($reg)) {
			$("#usedcars_verifica_tips").html("匹配正确").css("color", "green");
		} else {
			$("#usedcars_verifica_tips").html("请输入验证码").css("color", "red");
		}
	})

	//点击选中品牌车型
	$("#newcars_brand_live").click(function() {
		var $treatmen_box = $("#treatment_box");
		$treatmen_box.toggle();
	});
	//换一换
	var NewCar_raph=0;
	$('#NewCar_rec_raph').click(function() {
		if(NewCar_raph % 2 == 0) {
			$(".NewCar_rec_raphB").css("display", "none");
			$(".NewCar_rec_raphN").css("display", "block");
		} else {
			$(".NewCar_rec_raphB").css("display", "block");
			$(".NewCar_rec_raphN").css("display", "none");
		}
		NewCar_raph++;
	})
	//点击首字母 
		$(".treatment_brand_letter ul li").click(function(){
			console.log($(this).index())
			$(this).addClass("treatment_on").siblings().removeClass("treatment_on")
		})
})