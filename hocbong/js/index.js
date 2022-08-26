$(document).ready(function(){
    $("a.go").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500)
        {
            $("a.go").fadeIn();
        }
        else 
        {
            $("a.go").fadeOut();
        }
    })
    $("a.mail") .click(function(){
        $("div.mainform").show()
    })
    $(".close") .click(function(){
        $("div.mainform").hide()
    })
})

