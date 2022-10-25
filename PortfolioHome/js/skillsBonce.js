$(function() {

  var $headerSkills = $('#headerSkills');

  $headerSkills.click(function () {

    var $HTMLBall = $('#skillHTML');
    var $CSSBall = $('#skillCSS');
    var $JSBall = $('#skillJS');
    var $jQueryBall = $('#skilljQuery');
    var $dotNETBall = $('#skillDotNET');
    var $sqlBall = $('#skillSQL');
    var $javaBall = $('#skillJava');
    var $pythonBall = $('#skillPython');

    $HTMLBall.css({ 
      position: 'relative',
      top: -300,
      
    })
    .animate({
      top: 0
    }, 1000, 'easeOutBounce')

    $CSSBall.css({ 
      position: 'relative',
      top: -300,
      
    })
    .animate({
      top: 0
    }, 1200, 'easeOutBounce')


    $JSBall.css({ 
      position: 'relative',
      top: -300,
      
    })
    .animate({
      top: 0
    }, 1400, 'easeOutBounce')


    $jQueryBall.css({ 
      position: 'relative',
      top: -300,
      
    })
    .animate({
      top: 0
    }, 1600, 'easeOutBounce')


    $dotNETBall.css({ 
      position: 'relative',
      top: -300,
      
    })
    .animate({
      top: 0
    }, 1800, 'easeOutBounce')


    $sqlBall.css({ 
      position: 'relative',
      top: -300,
      
    })
    .animate({
      top: 0
    }, 2000, 'easeOutBounce')



    $javaBall.css({ 
      position: 'relative',
      top: -300,
      
    })
    .animate({
      top: 0
    }, 2200, 'easeOutBounce')



    $pythonBall.css({ 
      position: 'relative',
      top: -300,
      
    })
    .animate({
      top: 0
    }, 2400, 'easeOutBounce')

  });
});