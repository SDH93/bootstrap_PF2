$('.nav-item,.sub_bg').on('mouseenter mouseleave',function(aa){

    if($(window).width() > 992){   //pc(데스크탑) 상태
        if(aa.type == 'mouseenter'){ //마우스 올렸을 때
            $('.sub_bg').stop().slideDown(300);
            $('header .sub').stop().fadeIn(300);
        } else {
            $('.sub_bg').stop().slideUp(300,function(){
                $('this').removeAttr('style');
            });
            $('header .sub').stop().fadeOut(300,function(){
                $('this').removeAttr('style');
            });    
        }
    }
});

//모바일 메인메뉴 클릭 > 서브메뉴 나옴
const $mainBtn = $('.navbar-nav > li > a'); //메인메뉴



$mainBtn.click(function(){
    if($(window).width() < 993){ //모바일일 경우
        if( !$(this).parents('li').hasClass('on') ){ //클릭한 a 부모 li on이 없을 때
            $('header .sub').slideUp(500);
            $('.navbar-nav > li').removeClass('on');
            $(this).siblings('.sub').slideDown(500);
            $(this).parents('li').addClass('on');
        } else{ //이미 열려있는 경우 (on)
            $('header .sub').slideUp(500);
            $(this).parents('li').removeClass('on');
        }
    }
});



// //모바일 햄버거 버튼 > 사이드바 열리고 닫힘
// $('.navbar-toggler').click(function(){
//     $(this).toggleClass('open');

//     if($(this).hasClass('open')){
//         $('.lang').animate({right:350},400);
//     } else{
//         $('.lang').animate({right:100},400);
//     }
// });