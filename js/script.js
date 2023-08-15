// jquery ui tabs 頁簽
$( function() {
    $( "#tabs" ).tabs();
} );


$(window).scroll(function(){

    // 滾動至指定位置啟動動畫
    var h = $(window).height()-450;
    if($(this).scrollTop() > h ){
        $('#food_1').css('animation-name','food_1');
        $('#food_2').css('animation-name','food_2');
    }

    // 交換下拉選單
    if($(this).scrollTop()==0){
        $('.dropdown-menu').css('bottom','100%');
        $('.dropdown-menu').css('top','auto');
    }else{
        $('.dropdown-menu').css('top','100%');
        $('.dropdown-menu').css('bottom','auto');    
    }

});

// lightbox
lightbox.option({
    'wrapAround':true
});




