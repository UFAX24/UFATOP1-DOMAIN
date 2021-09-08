// Add your custom JS code here

$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = 'views/' + $(this).data('include') + '.html';
        $(this).load(file);
    });


    setTimeout(function () {
        $('#nav-hamburger').click(function () {
            $('html').toggleClass("menu-open")
        })

        // $('#__BVID__11').click(function() {
        //     $('#__BVID__11 > ul').addClass("hidden")
        //     $('#__BVID__12 > ul').addClass("d-none")
        //     $('#__BVID__11 > ul').toggleClass("show")
        // })

        // $('#__BVID__12').click(function() {
        //     $('#__BVID__11 > ul').addClass("d-none")
        //     $('#__BVID__12 > ul').addClass("d-none")
        //     $('#__BVID__12 > ul').toggleClass("show")
        // })

    }, 500)

});

// (function (d, s, id) {
//      var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; 
//       js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; 
//       fjs.parentNode.insertBefore(js, fjs); 
//       console.log(fjs)
//     }
//     (document, 'script', 'scorebat-jssdk'))



// "https://www.scorebat.com/embed/js/1630068754964/index.js"


  //<iframe src="https://www.scorebat.com/embed/livescore/" frameborder="0" width="600" height="760" allowfullscreen allow='autoplay; fullscreen' style="width:600px;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>