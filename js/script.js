$('.menu nav li').click(function(){
    const tabId = $(this).attr('tab-id')
    $('.tab').hide().removeClass('active')
    $('#' + tabId).show().addClass('active')
})

$('.tab').hide()
$('.tab.active').show()

var tech = new Swiper(".swiper", {
    speed: 500,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
})
