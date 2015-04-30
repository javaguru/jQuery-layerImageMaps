/*
 * layerImageMaps jQuery plugin v1.0
 *
 * Allows layer injection based on maps area coords(x,y,-,-)
 *
 * Copyright (c) 2015 Franck Andriano
 * https://github.com/javaguru/jQuery-layerImageMaps
 * Licensed under the MIT license
 *
 ***
 * Original code by Matt Stow
 * https://github.com/stowball/jQuery-rwdImageMaps
 *
 * Modified by Franck Andriano 23/04/2015
 *
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function($) {

    $.fn.layerImageMaps = function(options) {

        var $obj = this,
            $img = $obj.find('img[usemap]');

       // Create the defaultOptions, ajust x or y position depend CSS target container!
        var defaultOptions = {
                ajustTop: 0,
                ajustLeft: 0
            };

        this.options = $.extend( {}, defaultOptions, options) ;

        console.log("Init layerImageMaps area: #" +this.attr('id'));

        var layerImageMap = function() {

            $img.each(function() {
                if (typeof($(this).attr('usemap')) == 'undefined')
                    return;

                var that = this,
                    $that = $(that);

                // Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
                $('<img />').load(function() {
                    var w = $that.attr('width'),
                        h = $that.attr('height');

                    if (!w || !h) {
                        var temp = new Image();
                        temp.src = $that.attr('src');
                        if (!w) w = temp.width;
                        if (!h) h = temp.height;
                    }

                    var wPercent = $that.width()/100,
                        hPercent = $that.height()/100,
                        map = $that.attr('usemap').replace('#', ''),     // deactivation maps area!
                        c = 'coords';

                    $('map[name="' + map + '"]').find('area').each(function() {
                        var $this = $(this);
                        if (!$this.data(c)) $this.data(c, $this.attr(c));

                        var coords = $this.data(c).split(','), coordsPercent = new Array(coords.length);

                        var layer = $("#layer-"+$this.attr('data-id'));

                        layer.appendTo($($obj));

                        //console.log("area: "+$this.attr('data-id'));

                        var pos = {};
                        for (var i = 0; i < coordsPercent.length; ++i) {
                            if (i % 2 === 0) {
                                coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
                                if (i==0) pos.left = coordsPercent[i];
                            }
                            else {
                                coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
                                if (i==1) pos.top = coordsPercent[i];
                            }
                        }

                        // Ajust top and left position if needed!
                        $(layer).css({
                            position: "absolute",
                            top: (pos.top + $obj.options.ajustTop) + "px",
                            left: (pos.left + $obj.options.ajustLeft) + "px"
                        }).show();

                        //console.log("ajust: "+$obj.options.ajustTop + " / " +$obj.options.ajustLeft);

                        // we don't want use map coords!
                        //$this.attr(c, coordsPercent.toString());
                    });
                }).attr('src', $that.attr('src'));
            });
        };

        $(window).resize(layerImageMap).trigger('resize');

        return this;
    };
})(jQuery);
