$(document).ready(function(){
    // 하단 탑이동버튼
    $("a.top_btn svg").click(function() {
	    $("body,html").animate({scrollTop: $('#main').offset().top}, 1000,'easeInOutCubic');
	    return false;
	});	

	//서브페이지 snb 마우스오버시 오른쪽으로 이동 액션
	$('#snb>ul>li>a, #snb>ul>li>ul>li').mouseenter(function(){
		$(this).stop().animate({'left':'16px'},200);
	});

	$('#snb>ul>li>a, #snb>ul>li>ul>li').mouseleave(function(){
		$(this).stop().animate({'left':'0'},200);
	});

	//서브페이지 상단 img fadeIn 효과
	$('#main>img').hide();
	setInterval(function(){
    $('#main>img').fadeIn(1000)},0.1);

});