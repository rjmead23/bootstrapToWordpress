$(function() {

  // cache the window object
  var $window = $(window);

  // Parallax Background effect
  $('section[data-type="background"]').each(function() {
    var $bgobj = $(this); // Assigning the object

    $($window).scroll(function() {

      // Scroll the background at var speed
      // the yPos is a negative value because we're scroilling it up!

      var yPos = -($window.scrollTop() / $bgobj.data('speed'))

      // Put together our final background position
      var coords = '50% ' + yPos + 'px';

      // move the Background
      $bgobj.css({ backgroundPosition: coords });

    }); // end window scroll
  });

})
