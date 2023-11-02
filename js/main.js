//btn

$('.tit .btn').click(function (ev) {
    ev.preventDefault()
    // $(".nav").toggle();
    //$(".nav").fadeToggle();
    $(".nav").slideToggle();
    $(this).toggleClass("on");
})

//slide list

$('.ban').slick({
    infinite: true,
    slidesToShow: 3, //한 화면에 보이는 갯수
    slidesToScroll: 1, //버튼을 클릭하면 보이는 갯수;
    dots: true,
    autoplay: true
});

// gallery_img

$('.gallery_img').slick({
    arrows: false
});

$('.gallery_btn .play').click(function(){
    $('.gallery_img').slick('slickPlay');
})

$('.gallery_btn .pause').click(function(){
    $('.gallery_img').slick('slickPause');
})

$('.gallery_btn .prev').click(function(){
    $('.gallery_img').slick('slickPrev');
})

$('.gallery_btn .next').click(function(){
    $('.gallery_img').slick('slickNext');
})

// layer popup

$('.layer').click(function(ev){
    ev.preventDefault() //새로고침(튕김막기)
    $('#layer').fadeIn();
});

$('.colse').click(function(ev){
    ev.preventDefault()
    $('#layer').fadeOut()
})

//window

$('.window').click(function(ev){
    ev.preventDefault()
    window.open('popup.html' ,'layer', 'top=0,left=0,width=400,height=400')
})

// $('.window').click(function(){
//     window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
// })




//tabmenu--------------------------

//.next() 는 바로 밑요소
//.parent() 는 부모요소
//.siblings() 나를 제외한 형제요소
//.find() 하위요소(내안에 있는 요소들)

let tab_list = $('.tab_menu');

tab_list.find('ul ul').hide();

tab_list.find('li.active ul').show();

$('.tab_menu>ul>li>a').click(function (ev) {
    ev.preventDefault();
    let $this = $(this)
    //변수를 만들때 사용할수 있는 특수문자($ , _)  
    $this.next('ul').show()
    $this.parent('li').addClass('active')
    $this.parent('li').siblings('li').removeClass('active').find('ul').hide()
})

// --------------팝업----------------
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
});



