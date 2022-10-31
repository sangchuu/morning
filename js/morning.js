$(document).ready(function(){

//상단메뉴 마우스오버시 각 항목별 하위메뉴 슬라이드
$(".mainMenu").on("mouseenter click" , function(){//마우스 올라가면 반응 연산해라
    $(".mainMenu").removeClass("active");
	$("#white").stop().animate({height: "80px" });
	//위로 서서히 올라간 후 {display:none;}
	//$(".subMenu").stop().slideUp();//stop()없으면 계속 재생된다
	//그것(마우스 갖다댄거)의 다음 요소
	//모든 하위메뉴가 슬라이드다운된다
	$(".subMenu").stop().slideDown();
});
//하위메뉴에 마우스 갖다댈때 메인메뉴 활성 유지
$(".subMenu").mouseenter(function(){
	$("mainMenu").removeClass("active");
	$(this).prev().addClass("active");
});
//하위메뉴 마우스 아웃 시 올라간다
$("header>nav").mouseleave(function(){//mouseleave(결과)마우스가 떨어질때 반응
	menu();
});
//메뉴 마지막 항목이 포커스를 잃을 때, 
$(".last").blur(function(){
	menu();
	});
	
	function menu(){
	$(".mainMenu").removeClass("active");
	$(".subMenu").stop().slideUp();
	$("#white").stop().animate({height: 0 });//포커스를 잃을 때
	}
//왼쪽방향 자동 슬라이드
setInterval(leftMove, 2000);
function leftMove(){
	$("#sliding div").stop().animate({left:"-1100px"}, 1000, function(){
		$(this).append( $(this).children( ).first());
		$(this).css("left" , 0);
		
	});
}
//공지사항 보이기
$(".show").click(function(){//class id="show"인 애 클릭 시 팝업 페이드인
	$("#popup").fadeIn();
});
//공지사항 닫기
$("#popup button").click(function(){//팝업버튼 클릭 시 팝업 페이드아웃
	$("#popup").fadeOut();
});

//키보드 자판에서 어떤 키를 눌렀는지 감지한다
$(document).keydown(function(event){
	if(event.key === "Escape"){
	$("#popup").fadeOut();
    }
	});
	
	
	
	});/////////마지막 부분