$(function() {
	$(".homepage").mousemove(function() {
		$(".homepage img").attr("src", $(this).attr("img2"));
	});
	$(".homepage").mouseout(function() {
		$(".homepage img").attr("src", $(this).attr("img1"));
	});
	$(".xl_s").each(function() {
		$(this).mousemove(function() {
			$(this).find(".xl_img").attr("src", $(this).attr("img2"));
			$(this).find(".xjh").attr("src", "img/upArrow2.svg");
		});
		$(this).mouseout(function() {
			$(this).find(".xl_img").attr("src", $(this).attr("img1"));
			$(this).find(".xjh").attr("src", "img/downArrow1.svg");
		});
	});
	$(".second_search li").each(function() {
		$(this).click(function() {
			$(".second_search li").each(function(i) {
				$(this).removeClass("type1");
				$(this).addClass("wz1");
			});
			$(this).addClass("type1");
		});
	});
});