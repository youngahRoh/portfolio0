var nav = $("#nav ul li"); //버튼을 변수에 할당(저장)
var cont = $("#contents > div"); //컨텐츠를 변수에 할당

//버튼ㅇ르 클릭했을 때
nav.click(function(e){
   // e.preventDefault(); //# 기본기능을 차단
    var target = $(this); //클릭한 타겟을 변수에 할당
    var index = target.index(); //클릭한 타겟에 번호를 할당
    //alert(index);
    var section = cont.eq(index); //eq 순서 나타내는 메소드
    var offset = section.offset().top; //offset 맨 왼쪽 꼭지점
    //alert(offset);
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});

/*$(window).scroll(function() { //스크롤이 되면 동작해라
    var wScroll = $(this).scrollTop(); //offset값과 scrollTop값이 똑같으면 화면에 보임

    if(wScroll >= cont.eq(0).offset().top) {
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if(wScroll >= cont.eq(1).offset().top) {
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if(wScroll >= cont.eq(2).offset().top) {
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if(wScroll >= cont.eq(3).offset().top) {
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if(wScroll >= cont.eq(4).offset().top) {
        nav.removeClass("active");
        nav.eq(4).addClass("active");
    }
    if(wScroll >= cont.eq(5).offset().top) {
        nav.removeClass("active");
        nav.eq(5).addClass("active");
    }
    
});  */



    $(".mNav").click(function(){
       // $(".menu").css("display", "block")
       //$(".menu").show(); //hide()
       //$(".menu").fadeIn(); //fadeOut()
       //$(".menu").slideDown(); //slideUP()
       $(".menu").toggle();
       //$(".menu").fadeToggle();
      // $(".menu").slideToggle();
        });
        
    $(window).resize(function() {
        var wWidth = $(window).Width(); //this.wWidth()를 써도 됨
        //화면 크기가 800이상일 때 style="display:none" 삭제
        if (wWidth > 800 && $(".menu").is(":hidden") || $(".menu").is(":show")) { //is는 찾는거 800보다 크거나 메뉴가 숨겨져 있을때 스타일 제거
            $(".menu").removeAttr("style");
        }
    });
