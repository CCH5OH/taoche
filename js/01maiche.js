$(function() {
	var carSaleHeight = $(".car-sale").offset().top;
	$(window).scroll(function() {
		var this_scrollTop = $(this).scrollTop();
		if(this_scrollTop > carSaleHeight) {
			$(".ani").show();
		}
		if(this_scrollTop <= carSaleHeight) {
			$(".ani").hide();
			$(".dire-falsetxt").hide();  
			$("#hovePhone").val('请输入您的手机号码');
		}
	});

	$(".phon-item>dl>dt>a").click(function() {
		$(".citylist").fadeToggle();
	});

	$("#phone").each(function() {
		var nowValue1 = this.value;
		$(this).focus(function() {
			if(this.value == nowValue1) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = nowValue1;
			}
		});
	});

	$(".maiche-btn").click(function() {           
		var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;           
		var mobile = $("#phone").val();        
		if(mobile == null || mobile == "" || !reg.exec(mobile))            {               
			$(".num-err").show();          
		}           
		else {               
			$(".num-err").hide();           
		}       
	});

	$("#hovePhone").each(function() {
		var nowValue2 = this.value;
		$(this).focus(function() {
			if(this.value == nowValue2) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = nowValue2;
			}
		});
	});
	
	$(".dire-seachbtn").click(function() {           
		var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;           
		var mobile2 = $("#hovePhone").val();        
		if(mobile2 == null || mobile2 == "" || !reg.exec(mobile2))            {               
			$(".dire-falsetxt").show();          
		}           
		else {               
			$(".dire-falsetxt").hide();           
		}       
	});
})