$(function(){
	$(".car-checked>.form-arrow").click(function(){
		$(".car-col>.form-popover").fadeToggle();
	});
	$(".time-checked>.form-arrow").click(function(){
		$(".time-checked>.time-popover").fadeToggle();
	});
	$("#txtPhone").each(function(){
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
			$("#errphone").hide(); 
		});
	});
	
	$(".assessment-screen-but").click(function() {           
		var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;           
		var mobile = $("#txtPhone").val();        
		if(mobile == null || mobile == "" || !reg.exec(mobile))            {               
			$("#errphone").show();          
		}           
		else {               
			$("#errphone").hide();           
		}       
	});
	
	$("#txtMil").each(function(){
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
})