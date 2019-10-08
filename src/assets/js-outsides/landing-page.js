;(function($, window, undefined) {
    'use strict';
  
    var pluginName = 'quote-block';
  
    function Plugin(element, options) {
      this.element = $(element);
      this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
      this.init();
    }
  
    Plugin.prototype = {
      init: function() {
        var el = this.element;
        
        el.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          loop: true,
          speed: 300,
          arrows: true,
          dots: true,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
        }); 
  
      },
  
      destroy: function() {
        $.removeData(this.element[0], pluginName);
      }
    };
  
    $.fn[pluginName] = function(options, params) {
      return this.each(function() {
        var instance = $.data(this, pluginName);
        if (!instance) {
          $.data(this, pluginName, new Plugin(this, options));
        } else if (instance[options]) {
          instance[options](params);
        }
      });
    };
  
    $.fn[pluginName].defaults = {};
  
    $(function() {
      $('[data-' + pluginName + ']')[pluginName]({
      });
    });
  
  }(jQuery, window));
