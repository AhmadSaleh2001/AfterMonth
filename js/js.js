/*global $, document, window, console*/

$(document).ready
(
    function()
    {
        $(".Loading").delay(2000).fadeOut
        (
            1000
            ,
            function()
            {
                $("body").css("overflow","auto");
            }
        );
    }
)

$(document).ready
(
    function()
    {
        $("#MyCarousel").carousel
        (
            {
                interval:1000
            }
        );
        
        $(".MyIcon").on
        (
            "click"
            ,
            function()
            {
                $(".Change .Container .Item").toggle(1000);
            }
        );
        
        $(".Change .Container .Item ul li").on
        (
            "click"
            ,
            function()
            {
                console.log($("link[href*=Theme]").attr("href","css/" + $(this).attr("class") + "_Theme.css"));
                $(".Change .Container .Item").hide(1000);
            }
        );
        
        $(window).on
        (
            "scroll"
            ,
            function()
            {
                if($(this).scrollTop() >=553)
                    {
                        $(".BackToTop").fadeIn(1000);
                    }
                else
                    {
                        $(".BackToTop").fadeOut(1000);
                    }
            }
        );
        
        $(".BackToTop").on
        (
            "click"
            ,
            function()
            {
                $("html , body").animate
                (
                    {
                        "scrollTop":0
                    }
                    ,
                    1000
                )
            }
        )
    
    }
)