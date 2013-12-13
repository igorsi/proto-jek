/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 *       www.richardshepherd.com
 *       @richardshepherd   
 */
var Parallax = Parallax || {};
(function($) {
  
  Parallax.Parallax = Class.extend({  

    cache: {
      window:null
    },

    init: function() {  
      // Cache the Window object
      this.cache.window = $(window);
      var self = this;
      // Cache the Parallax-Data
      $('[data-parallax-type]').each(function(){
          self.cacheParallaxData(this);
        } 
      );
    },

    cacheParallaxData : function(element) { 
      // Cache the Y offset, Xposition and the speed of each Element of data-parallax-type
      $(element).data('offsetY', parseInt($(element).attr('data-parallax-offsetY')));
      $(element).data('Xposition', $(element).attr('data-parallax-Xposition'));
      $(element).data('speed', $(element).attr('data-parallax-speed'));
    },

    activateEffect: function(element){
      var self = this;
      // When the window is scrolled...
      if ( self.elementIsInView(element) ) {
        self.scrollBackgroundAtSpeed(element);
      }; 
      $(window).scroll(function() {
        if ( self.elementIsInView(element) ) {
          self.scrollBackgroundAtSpeed(element);
        }; 
      }); 
    },

    elementIsInView: function(element) {
      return (this.cache.window.scrollTop() + this.cache.window.height()) > (element.offset().top) && ( (element.offset().top + element.height()) > this.cache.window.scrollTop() ) ;
    },

    scrollBackgroundAtSpeed :  function(element) {
      // the yPos is a negative value because we're scrolling it UP!                
      var yPos, maxScroll;
      var maxScroll = element.height() - 1339 + 2;
      yPos = -Math.round(((this.cache.window.scrollTop() - element.offset().top) / element.height()) * maxScroll);
      yPos = Math.max(yPos, maxScroll);

      // If this element has a Y offset then add it on
      if (element.data('offsetY')) {
        yPos += element.data('offsetY');
      }
    
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      element.css({ backgroundPosition: coords });
    }

  });
})($);