$(function () {

    var elem = $("#scrollTop");
        

    function show_scrollTop() {
        ($(window).scrollTop() > 300) ? elem.fadeIn(600) : elem.hide();
    }

    $(".coffee-love").css("right", $(".top-container").offset().left);
    $(window).resize(function () {
        $(".coffee-love").css("right", $(".top-container").offset().left);
    })
    //$(window).scroll(function () { show_scrollTop() }); show_scrollTop();

    /*$(window).scroll(function(){
      var docscroll=$(document).scrollTop();
      if(docscroll>$(window).height()){
        $('.fixed-top').css({'height': $('.fixed-top').height(),'width': $('.fixed-top').width()}).addClass('fixed');
      }else{
        $('.fixed-top').removeClass('fixed');
      }
    });*/

    /*$(window).scroll(function(){
            if ($(this).scrollTop() > 350) {
                $('.fixed-top').addClass('fixed');
            } else {
                $('.fixed-top').removeClass('fixed');
            }
        });*/

/*фикс меню   
   let header = $('.fixed-top');
    let hederHeight = header.height(); 
  
    $(window).scroll(function() {
        if($(this).scrollTop() == hederHeight) {
            header.fadeOut(500);
            console.info(hederHeight)
        }
        if($(this).scrollTop() > hederHeight) {
            header.addClass('fixed').fadeIn(500);
            $('body').css({'paddingTop': hederHeight+'px' });
        } else {
            header.removeClass('fixed');
            $('body').css({'paddingTop': 0 })
        }
    })*/


    $(".v-rol a").hover(function () {
        $(".v-rol a").addClass("rotate")
      }, function() {
        $(".v-rol a").removeClass("rotate")
      })


    $("#navbar").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                    top = $(id).offset().top-120;
                $('body,html').animate({scrollTop: top}, 1500);
                $('#navbar').removeClass('show');
            });
        

    $('#scrollTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });


    $('a[rel*=facebox]').facebox({
        loadingImage: 'loading.gif',
        closeImage: 'closelabel.png'
    })

    //����� �� ��������
    $(".phone").mask("+7 (999) 999-9999");
    $(document).bind('reveal.facebox', function () { $("#facebox .phone").mask("+7 (999) 999-9999"); })

    //   map();

})


//��������� ����� ��������� ������
function SendCall() {
    var url = 'jsoncall.php';
    var tt_name = $('#facebox #c_name').val();
    var tt_phone = $('#facebox #c_tel').val();
    $('#call-back').load(url, { nm: tt_name, ph: tt_phone });
    jQuery.facebox({ div: '#endsee' });
}

function SendCallPage() {
    var url = 'jsonpodarok.php';
    var tt_name = $('#cc_name').val();
    var tt_tel = $('#cc_tel').val();
    var tt_url = window.location.href;
    var tt_ttl = $('#call .form-btn').val();
    $('#call').load(url, { nm: tt_name, ph: tt_tel, url: tt_url, ttl: tt_ttl});
}

function SendCallPageBot() {
    var url = 'jsonpodarok.php';
    var tt_name = $('#cc_name2').val();
    var tt_tel = $('#cc_tel2').val();
    var tt_url = window.location.href;
    var tt_ttl = $('#call2 .form-btn').val();
    $('#call2').load(url, { nm: tt_name, ph: tt_tel, url: tt_url, ttl: tt_ttl });
}










