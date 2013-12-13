/* =============================================================

  Mini Collapse v0.1
  A simple collapse and expand plugin by Ricard Fredin.
  http://github.com/cordazar

  Free to use under the ---LICENSE---.
  ---URL---
  
 * ============================================================= */

(function ( $ ) {

  $.fn.collapse = function(options) {

    return this.each(function(i, el) {

      var base = el,
        $base = $(el),
        targetID = $base.data('target'),
        $target = $(targetID),
        parentID = $base.data('parent');

      base.init = function() {
        $base
          .click(function(e) {
            e.preventDefault();
            if (parentID) {
              if (!$base.hasClass('active')){
                $('[data-parent='+parentID+']').each(function(){
                  var $t = $(this);
                  base.close($t);
                });
                base.open($base);
              }
            } else {
              if ($base.hasClass('active')){
                base.close($base);
              } else {
                base.open($base);
              }
            }
          })
      };

      base.open = function($b) {
        var hash = $b.data('target');
        hash = hash.replace('#','');
        window.location.hash = hash;
        $('[data-target='+$b.data('target')+']').addClass('active');
        $($b.data('target')).addClass('active');
        $b.trigger("mini.open");
      };

      base.close = function($b) {
        window.location.hash = '';
        $('[data-target='+$b.data('target')+']').removeClass('active');
        $($b.data('target')).removeClass('active');
        $b.trigger("mini.close");
      };
      
      base.init();
    });
    
  };
  
}( jQuery ));


$(function(){
  $('.collapse-toggle').collapse();
});