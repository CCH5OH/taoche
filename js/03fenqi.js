$(function(){
	var phoneInput1 = $(".loan-customized-mid-Submit>input");
	var phoneNum1 = phoneInput1.val();
	phoneInput1.click(function(){
		phoneSpan1.hide().focus();
	});
	phoneInput1.blur(function(){
		phoneNum1 == '';
	});
	$("#txtMobile").each(function(){
		var nowValue = this.value;
		$(this).focus(function(){
			if (this.value == nowValue) {
				this.value = '';
			}
		});
		$(this).blur(function(){
			if (this.value == '') {
				this.value = nowValue;
			}
		});
	});
	
	$("#btnSubmit").click(function() {           
		var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;           
		var mobile = $("#txtMobile").val();        
		if(mobile == null || mobile == "" || !reg.exec(mobile))            {               
			$("#err_mobile").show();          
		}           
		else {               
			$("#err_mobile").hide();           
		}       
	});
	
	$(".loan-but>span>a").click(function(){
		$("#bgCen").show();
		$("#div_form1").show();
	});
	$("#btnClose1,#btnCancel1").click(function(){
		$("#bgCen").hide();
		$("#div_form1").hide();
		$("#txtMobile1").val('请输入您的手机号');
		$("#txtValidateCode").val('请输入校验码');
		$("#err_mobile1").hide();
		$("#err_validatecode").hide();
	});
	$("#txtMobile1").each(function(){
		var nowValue1 = this.value;
		$(this).focus(function(){
			if (this.value == nowValue1) {
				this.value = '';
			}
		});
		$(this).blur(function(){
			if (this.value == '') {
				this.value = nowValue1;
			}
		});
	});
	$("#txtValidateCode").each(function(){
		var nowValue2 = this.value;
		$(this).focus(function(){
			if (this.value == nowValue2) {
				this.value = '';
			}
		});
		$(this).blur(function(){
			if (this.value == '') {
				this.value = nowValue2;
			}
		});
	});
	
	$("#btnSubmit1").click(function() {           
		var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;           
		var mobile2 = $("#txtMobile1").val();        
		if(mobile2 == null || mobile2 == "" || !reg.exec(mobile2))            {               
			$("#err_mobile1").show();          
		}           
		else {               
			$("#err_mobile1").hide();           
		}       
	});
	
	$("#btnSubmit1").click(function() {          
		var valiDate = $("#txtValidateCode").val();        
		if(valiDate == null || valiDate == "")            {               
			$("#err_validatecode").show();          
		}           
		else {               
			$("#err_validatecode").hide();           
		}       
	});
})