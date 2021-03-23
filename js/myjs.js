$(function () {

    $(".coffee-love").css("right", $(".top-container").offset().left);
    $(window).resize(function () {
        $(".coffee-love").css("right", $(".top-container").offset().left);
    })

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //   $(".coffee-st").attr("id", "owl-slider");
        $("body").addClass("mobile");
    /*    $("#owl-slider").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            transitionStyle: "fade",
            autoPlay: '4000',
            navigationText: false,
            pagination: false
        }) */
        $("#bl5").css("min-height", "auto");
    }

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
        $('#navbar').removeClass('show');
        return false;
    });


    $('a[rel*=facebox]').facebox({
        loadingImage: '',
        closeImage: 'closelabel.png'
    })

    $(".phone").mask("+7 (999) 999-9999");
    $(document).bind('reveal.facebox', function () { $("#facebox .phone").mask("+7 (999) 999-9999"); })

})

function carousel() {
    $("#owl-slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fade",
        autoPlay: '4000',
        navigationText: false,
        pagination: false
    })
}

function SendCall() {
    var url = 'call.php';
    var tt_name = $('#facebox #c_name').val();
    var tt_phone = $('#facebox #c_tel').val();
    $('#call-back').load(url, { nm: tt_name, ph: tt_phone });
    jQuery.facebox({ div: '#endsee' });
}
function SendPrezent() {
    var url = 'prezent.php';
    var tt_phone = $('#facebox #p_tel').val();
    $('#prezent').load(url, { ph: tt_phone });
    jQuery.facebox({ div: '#endsee' });
}

function SendGo() {
    var url = 'go.php';
    var tt_name = $('#facebox #g_name').val();
    var tt_phone = $('#facebox #g_tel').val();
    $('#go').load(url, { nm: tt_name, ph: tt_phone });
    jQuery.facebox({ div: '#endsee' });
}
