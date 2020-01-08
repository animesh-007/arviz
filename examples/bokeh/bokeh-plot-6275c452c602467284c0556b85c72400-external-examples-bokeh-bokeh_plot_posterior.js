(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("73b19d72-f585-4f9c-a59f-a533a3d14b82");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '73b19d72-f585-4f9c-a59f-a533a3d14b82' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"f839414b-0ffb-4c3c-80d7-245850016fe2":{"roots":{"references":[{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"117499","type":"BasicTicker"}},"id":"117502","type":"Grid"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117536","type":"Text"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"117563","type":"Line"},{"attributes":{"source":{"id":"117576","type":"ColumnDataSource"}},"id":"117580","type":"CDSView"},{"attributes":{"source":{"id":"117539","type":"ColumnDataSource"}},"id":"117543","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117567","type":"Text"},{"attributes":{"callback":null},"id":"117445","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"text":["-1","1"],"x":[-1,1],"y":[0.01499161725406059,0.01499161725406059]},"selected":{"id":"117624","type":"Selection"},"selection_policy":{"id":"117625","type":"UnionRenderers"}},"id":"117581","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["-3.7","17","94% HPD"],"x":[-3.7069241836335243,17.337053100159448,6.815064458262961],"y":[0.005247066038921207,0.005247066038921207,0.022487425881090886]},"selected":{"id":"117618","type":"Selection"},"selection_policy":{"id":"117619","type":"UnionRenderers"}},"id":"117566","type":"ColumnDataSource"},{"attributes":{},"id":"117612","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"117556","type":"ColumnDataSource"}},"id":"117560","type":"CDSView"},{"attributes":{"callback":null},"id":"117447","type":"DataRange1d"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117582","type":"Text"},{"attributes":{},"id":"117598","type":"UnionRenderers"},{"attributes":{},"id":"117593","type":"Selection"},{"attributes":{},"id":"117503","type":"PanTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117583","type":"Text"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117558","type":"Line"},{"attributes":{"line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"117562","type":"Line"},{"attributes":{},"id":"117601","type":"Selection"},{"attributes":{"formatter":{"id":"117591","type":"BasicTickFormatter"},"ticker":{"id":"117454","type":"BasicTicker"}},"id":"117453","type":"LinearAxis"},{"attributes":{"data_source":{"id":"117581","type":"ColumnDataSource"},"glyph":{"id":"117582","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117583","type":"Text"},"selection_glyph":null,"view":{"id":"117585","type":"CDSView"}},"id":"117584","type":"GlyphRenderer"},{"attributes":{"source":{"id":"117529","type":"ColumnDataSource"}},"id":"117533","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117568","type":"Text"},{"attributes":{},"id":"117600","type":"UnionRenderers"},{"attributes":{"source":{"id":"117581","type":"ColumnDataSource"}},"id":"117585","type":"CDSView"},{"attributes":{"overlay":{"id":"117626","type":"BoxAnnotation"}},"id":"117504","type":"BoxZoomTool"},{"attributes":{},"id":"117449","type":"LinearScale"},{"attributes":{"data_source":{"id":"117566","type":"ColumnDataSource"},"glyph":{"id":"117567","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117568","type":"Text"},"selection_glyph":null,"view":{"id":"117570","type":"CDSView"}},"id":"117569","type":"GlyphRenderer"},{"attributes":{},"id":"117599","type":"Selection"},{"attributes":{},"id":"117603","type":"Selection"},{"attributes":{},"id":"117451","type":"LinearScale"},{"attributes":{"text":"theta\\nChoate"},"id":"117586","type":"Title"},{"attributes":{"data_source":{"id":"117556","type":"ColumnDataSource"},"glyph":{"id":"117557","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117558","type":"Line"},"selection_glyph":null,"view":{"id":"117560","type":"CDSView"}},"id":"117559","type":"GlyphRenderer"},{"attributes":{"source":{"id":"117566","type":"ColumnDataSource"}},"id":"117570","type":"CDSView"},{"attributes":{},"id":"117594","type":"UnionRenderers"},{"attributes":{},"id":"117589","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"text":["mean=6"],"x":[6.025829472794338],"y":[0.05996646901624236]},"selected":{"id":"117620","type":"Selection"},"selection_policy":{"id":"117621","type":"UnionRenderers"}},"id":"117571","type":"ColumnDataSource"},{"attributes":{},"id":"117596","type":"UnionRenderers"},{"attributes":{},"id":"117591","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"7qjL3cenDcBDM6ocSVYxQA==","dtype":"float64","shape":[2]},"y":[0.0014991617254060592,0.0014991617254060592]},"selected":{"id":"117616","type":"Selection"},"selection_policy":{"id":"117617","type":"UnionRenderers"}},"id":"117561","type":"ColumnDataSource"},{"attributes":{},"id":"117454","type":"BasicTicker"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117572","type":"Text"},{"attributes":{},"id":"117597","type":"Selection"},{"attributes":{},"id":"117610","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":null,"ticker":{"id":"117454","type":"BasicTicker"}},"id":"117457","type":"Grid"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117573","type":"Text"},{"attributes":{},"id":"117616","type":"Selection"},{"attributes":{"below":[{"id":"117453","type":"LinearAxis"}],"center":[{"id":"117457","type":"Grid"},{"id":"117462","type":"Grid"}],"left":[{"id":"117458","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"117527","type":"GlyphRenderer"},{"id":"117532","type":"GlyphRenderer"},{"id":"117537","type":"GlyphRenderer"},{"id":"117542","type":"GlyphRenderer"},{"id":"117547","type":"GlyphRenderer"},{"id":"117552","type":"GlyphRenderer"}],"title":{"id":"117554","type":"Title"},"toolbar":{"id":"117473","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"117445","type":"DataRange1d"},"x_scale":{"id":"117449","type":"LinearScale"},"y_range":{"id":"117447","type":"DataRange1d"},"y_scale":{"id":"117451","type":"LinearScale"}},"id":"117444","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"117589","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"ticker":{"id":"117459","type":"BasicTicker"},"visible":false},"id":"117458","type":"LinearAxis"},{"attributes":{"data_source":{"id":"117571","type":"ColumnDataSource"},"glyph":{"id":"117572","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117573","type":"Text"},"selection_glyph":null,"view":{"id":"117575","type":"CDSView"}},"id":"117574","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"text":["mean=4.1"],"x":[4.092610850912027],"y":[0.09194002332782314]},"selected":{"id":"117599","type":"Selection"},"selection_policy":{"id":"117600","type":"UnionRenderers"}},"id":"117539","type":"ColumnDataSource"},{"attributes":{},"id":"117602","type":"UnionRenderers"},{"attributes":{},"id":"117617","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"117605","type":"BoxAnnotation"},{"attributes":{},"id":"117459","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"117531","type":"Line"},{"attributes":{"source":{"id":"117571","type":"ColumnDataSource"}},"id":"117575","type":"CDSView"},{"attributes":{},"id":"117595","type":"Selection"},{"attributes":{},"id":"117618","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"117459","type":"BasicTicker"}},"id":"117462","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"MjTo0X7yAMBnLxQpcc4kQA==","dtype":"float64","shape":[2]},"y":[0.0022985005831955784,0.0022985005831955784]},"selected":{"id":"117595","type":"Selection"},"selection_policy":{"id":"117596","type":"UnionRenderers"}},"id":"117529","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[-1,1],"y":[0.0014991617254060592,0.0014991617254060592]},"selected":{"id":"117622","type":"Selection"},"selection_policy":{"id":"117623","type":"UnionRenderers"}},"id":"117576","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"117606","type":"BoxAnnotation"},{"attributes":{},"id":"117619","type":"UnionRenderers"},{"attributes":{"source":{"id":"117561","type":"ColumnDataSource"}},"id":"117565","type":"CDSView"},{"attributes":{"callback":null},"id":"117487","type":"DataRange1d"},{"attributes":{"line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"117530","type":"Line"},{"attributes":{"line_alpha":0.7,"line_color":"red","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117577","type":"Line"},{"attributes":{},"id":"117620","type":"Selection"},{"attributes":{"callback":null},"id":"117485","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117578","type":"Line"},{"attributes":{},"id":"117621","type":"UnionRenderers"},{"attributes":{},"id":"117604","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"117529","type":"ColumnDataSource"},"glyph":{"id":"117530","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117531","type":"Line"},"selection_glyph":null,"view":{"id":"117533","type":"CDSView"}},"id":"117532","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"117561","type":"ColumnDataSource"},"glyph":{"id":"117562","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117563","type":"Line"},"selection_glyph":null,"view":{"id":"117565","type":"CDSView"}},"id":"117564","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"117607","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"117576","type":"ColumnDataSource"},"glyph":{"id":"117577","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117578","type":"Line"},"selection_glyph":null,"view":{"id":"117580","type":"CDSView"}},"id":"117579","type":"GlyphRenderer"},{"attributes":{},"id":"117622","type":"Selection"},{"attributes":{"data_source":{"id":"117539","type":"ColumnDataSource"},"glyph":{"id":"117540","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117541","type":"Text"},"selection_glyph":null,"view":{"id":"117543","type":"CDSView"}},"id":"117542","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"117493","type":"LinearAxis"}],"center":[{"id":"117497","type":"Grid"},{"id":"117502","type":"Grid"}],"left":[{"id":"117498","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"117559","type":"GlyphRenderer"},{"id":"117564","type":"GlyphRenderer"},{"id":"117569","type":"GlyphRenderer"},{"id":"117574","type":"GlyphRenderer"},{"id":"117579","type":"GlyphRenderer"},{"id":"117584","type":"GlyphRenderer"}],"title":{"id":"117586","type":"Title"},"toolbar":{"id":"117513","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"117485","type":"DataRange1d"},"x_scale":{"id":"117489","type":"LinearScale"},"y_range":{"id":"117487","type":"DataRange1d"},"y_scale":{"id":"117491","type":"LinearScale"}},"id":"117484","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"117463","type":"PanTool"},{"id":"117464","type":"BoxZoomTool"},{"id":"117465","type":"WheelZoomTool"},{"id":"117466","type":"BoxSelectTool"},{"id":"117467","type":"LassoSelectTool"},{"id":"117468","type":"UndoTool"},{"id":"117469","type":"RedoTool"},{"id":"117470","type":"ResetTool"},{"id":"117471","type":"SaveTool"},{"id":"117472","type":"HoverTool"}]},"id":"117473","type":"Toolbar"},{"attributes":{},"id":"117623","type":"UnionRenderers"},{"attributes":{},"id":"117463","type":"PanTool"},{"attributes":{"source":{"id":"117524","type":"ColumnDataSource"}},"id":"117528","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["-2.1","10","94% HPD"],"x":[-2.1184059523571017,10.403207095827112,4.1424005717350045],"y":[0.008044752041184525,0.008044752041184525,0.03447750874793367]},"selected":{"id":"117597","type":"Selection"},"selection_policy":{"id":"117598","type":"UnionRenderers"}},"id":"117534","type":"ColumnDataSource"},{"attributes":{},"id":"117624","type":"Selection"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117535","type":"Text"},{"attributes":{"overlay":{"id":"117605","type":"BoxAnnotation"}},"id":"117464","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"117524","type":"ColumnDataSource"},"glyph":{"id":"117525","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117526","type":"Line"},"selection_glyph":null,"view":{"id":"117528","type":"CDSView"}},"id":"117527","type":"GlyphRenderer"},{"attributes":{},"id":"117625","type":"UnionRenderers"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117550","type":"Text"},{"attributes":{},"id":"117465","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"117626","type":"BoxAnnotation"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117525","type":"Line"},{"attributes":{"callback":null,"overlay":{"id":"117606","type":"BoxAnnotation"}},"id":"117466","type":"BoxSelectTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117526","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117546","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"117627","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"117607","type":"PolyAnnotation"}},"id":"117467","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"117503","type":"PanTool"},{"id":"117504","type":"BoxZoomTool"},{"id":"117505","type":"WheelZoomTool"},{"id":"117506","type":"BoxSelectTool"},{"id":"117507","type":"LassoSelectTool"},{"id":"117508","type":"UndoTool"},{"id":"117509","type":"RedoTool"},{"id":"117510","type":"ResetTool"},{"id":"117511","type":"SaveTool"},{"id":"117512","type":"HoverTool"}]},"id":"117513","type":"Toolbar"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117541","type":"Text"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"117628","type":"PolyAnnotation"},{"attributes":{},"id":"117468","type":"UndoTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"117593","type":"Selection"},"selection_policy":{"id":"117594","type":"UnionRenderers"}},"id":"117524","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"117463","type":"PanTool"},{"id":"117464","type":"BoxZoomTool"},{"id":"117465","type":"WheelZoomTool"},{"id":"117466","type":"BoxSelectTool"},{"id":"117467","type":"LassoSelectTool"},{"id":"117468","type":"UndoTool"},{"id":"117469","type":"RedoTool"},{"id":"117470","type":"ResetTool"},{"id":"117471","type":"SaveTool"},{"id":"117472","type":"HoverTool"},{"id":"117503","type":"PanTool"},{"id":"117504","type":"BoxZoomTool"},{"id":"117505","type":"WheelZoomTool"},{"id":"117506","type":"BoxSelectTool"},{"id":"117507","type":"LassoSelectTool"},{"id":"117508","type":"UndoTool"},{"id":"117509","type":"RedoTool"},{"id":"117510","type":"ResetTool"},{"id":"117511","type":"SaveTool"},{"id":"117512","type":"HoverTool"}]},"id":"117631","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"117444","subtype":"Figure","type":"Plot"},0,0],[{"id":"117484","subtype":"Figure","type":"Plot"},0,1]]},"id":"117630","type":"GridBox"},{"attributes":{},"id":"117614","type":"Selection"},{"attributes":{"source":{"id":"117534","type":"ColumnDataSource"}},"id":"117538","type":"CDSView"},{"attributes":{},"id":"117469","type":"RedoTool"},{"attributes":{"toolbar":{"id":"117631","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"117632","type":"ToolbarBox"},{"attributes":{},"id":"117470","type":"ResetTool"},{"attributes":{"callback":null},"id":"117512","type":"HoverTool"},{"attributes":{"data_source":{"id":"117544","type":"ColumnDataSource"},"glyph":{"id":"117545","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117546","type":"Line"},"selection_glyph":null,"view":{"id":"117548","type":"CDSView"}},"id":"117547","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"117632","type":"ToolbarBox"},{"id":"117630","type":"GridBox"}]},"id":"117633","type":"Column"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117540","type":"Text"},{"attributes":{},"id":"117471","type":"SaveTool"},{"attributes":{},"id":"117511","type":"SaveTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117551","type":"Text"},{"attributes":{"callback":null},"id":"117472","type":"HoverTool"},{"attributes":{"callback":null,"data":{"x":[-1,1],"y":[0.0022985005831955784,0.0022985005831955784]},"selected":{"id":"117601","type":"Selection"},"selection_policy":{"id":"117602","type":"UnionRenderers"}},"id":"117544","type":"ColumnDataSource"},{"attributes":{"source":{"id":"117549","type":"ColumnDataSource"}},"id":"117553","type":"CDSView"},{"attributes":{},"id":"117510","type":"ResetTool"},{"attributes":{},"id":"117505","type":"WheelZoomTool"},{"attributes":{},"id":"117489","type":"LinearScale"},{"attributes":{"source":{"id":"117544","type":"ColumnDataSource"}},"id":"117548","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117557","type":"Line"},{"attributes":{},"id":"117509","type":"RedoTool"},{"attributes":{},"id":"117491","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_color":"red","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117545","type":"Line"},{"attributes":{"callback":null,"data":{"text":["-1","1"],"x":[-1,1],"y":[0.022985005831955785,0.022985005831955785]},"selected":{"id":"117603","type":"Selection"},"selection_policy":{"id":"117604","type":"UnionRenderers"}},"id":"117549","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"117628","type":"PolyAnnotation"}},"id":"117507","type":"LassoSelectTool"},{"attributes":{},"id":"117508","type":"UndoTool"},{"attributes":{"formatter":{"id":"117612","type":"BasicTickFormatter"},"ticker":{"id":"117494","type":"BasicTicker"}},"id":"117493","type":"LinearAxis"},{"attributes":{"data_source":{"id":"117534","type":"ColumnDataSource"},"glyph":{"id":"117535","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117536","type":"Text"},"selection_glyph":null,"view":{"id":"117538","type":"CDSView"}},"id":"117537","type":"GlyphRenderer"},{"attributes":{},"id":"117494","type":"BasicTicker"},{"attributes":{},"id":"117615","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"117549","type":"ColumnDataSource"},"glyph":{"id":"117550","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117551","type":"Text"},"selection_glyph":null,"view":{"id":"117553","type":"CDSView"}},"id":"117552","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"117614","type":"Selection"},"selection_policy":{"id":"117615","type":"UnionRenderers"}},"id":"117556","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"117627","type":"BoxAnnotation"}},"id":"117506","type":"BoxSelectTool"},{"attributes":{"grid_line_color":null,"ticker":{"id":"117494","type":"BasicTicker"}},"id":"117497","type":"Grid"},{"attributes":{"formatter":{"id":"117610","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"ticker":{"id":"117499","type":"BasicTicker"},"visible":false},"id":"117498","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"117554","type":"Title"},{"attributes":{},"id":"117499","type":"BasicTicker"}],"root_ids":["117633"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"f839414b-0ffb-4c3c-80d7-245850016fe2","roots":{"117633":"73b19d72-f585-4f9c-a59f-a533a3d14b82"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();