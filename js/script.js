$('.menu nav li').click(function(){
    const tabId = $(this).attr('tab-id')
    $('.tab').hide().removeClass('active')
    $('#' + tabId).show().addClass('active')
})

$('.tab').hide()
$('.tab.active').show()
