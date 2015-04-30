# jQuery-layerImageMaps

### Allows layer injection based on image maps area coords(x,y,-,-) in responsive web design by recalculating the area coordinates to match the actual image size on load and window.resize

---

#### Usage:

* If possible, add [correct, unitless](http://dev.w3.org/html5/markup/img.html) `width` and `height` attributes to your image map images. You can override these in CSS to make them responsive.
* Add a link to jQuery in your page, preferably at the bottom just before the closing `</body>`
* After jQuery, either in a `<script>` block or a separate file, call:

```js
$("#dynMap").layerImageMaps();
```

* Options: ajust x or y position layer, depend CSS target container:

```js
$("#dynMap").layerImageMaps({ajustTop: 0, ajustLeft: 0}); // full options!
```

You may also want to wrap it inside a `$(document).ready()` function, like so:

```js
$(document).ready(function(e) {
    $("#dynMap").layerImageMaps();
});
```

#### Example:

```html
<style>
        .layermaps {
            border: 1px solid #646464;
            background-color: #646464;
            box-shadow: 1px 1px 10px 0px #888;
            color: #fff;
            padding: 2px;
            font-size: 1em;
        }
</style>
<div>
    <div>
        <h2>Worl Map</h2>
    </div>

    <!-- Beginning of Client Side Image Map only shape="rect" -->
    <div id="dynMap">
        <img src="WorldMap.png" usemap="#banner" border="0" style="width: 100%; height: auto">
        <map name="banner">
            <!-- links area to id layer -->
            <area shape="rect" coords="1100,310,1101,311"   href="ch" data-id="index0"/> 
            <area shape="rect" coords="860,310,861,311"     href="gb" data-id="index1"/>
            <area shape="rect" coords="400,320,401,321"     href="us" data-id="index2"/>
            <area shape="rect" coords="260,600,261,601"     href="us" data-id="index3"/>
            <area shape="rect" coords="520,510,521,511"     href="us" data-id="index4"/>
            <area shape="rect" coords="950,500,951,501"     href="eu" data-id="index5"/>
            <area shape="rect" coords="1700,420,1701,421"   href="jp" data-id="index6"/>
            <area shape="rect" coords="1500,650,1501,651"   href="sw" data-id="index7"/>
        </map>
    </div>
</div>

<!-- links data-id layer -->
<div id="layer-index0" class="layermaps" style="display: none">SMI</div>
<div id="layer-index1" class="layermaps" style="display: none">FTSE 100</div>
<div id="layer-index2" class="layermaps" style="display: none">DJ Industr Average</div>
<div id="layer-index3" class="layermaps" style="display: none">S&amp;P 500</div>
<div id="layer-index4" class="layermaps" style="display: none">NASDAQ 100</div>
<div id="layer-index5" class="layermaps" style="display: none">ESTX50 EUR P</div>
<div id="layer-index6" class="layermaps" style="display: none">Nikkei 225</div>
<div id="layer-index7" class="layermaps" style="display: none">Hang Seng</div>
```

#### Demo:

http://...

---

Copyright (c) 2015 [Franck Andriano](http://jservlet.com)  
Licensed under the MIT license *(see [LICENSE](https://github.com/javaguru/jQuery-layerImageMaps/blob/master/LICENSE) for details)*  
Minified version created with Online YUI Compressor: http://refresh-sf.com/
