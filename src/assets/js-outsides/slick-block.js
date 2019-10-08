;(function($, window, undefined) {
    'use strict';
  
    var pluginName = 'slick-block';
  
    function Plugin(element, options) {
      this.element = $(element);
      this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
      this.init();
    }
  
    Plugin.prototype = {
      init: function() {
        var el = this.element;
        var blockInner = el.find('[data-slick-block-inner]');
        if($(window).width() < 767) {
            blockInner.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                loop: true,
                speed: 300,
                arrows: false,
                dots: true,
            }); 
        }
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
