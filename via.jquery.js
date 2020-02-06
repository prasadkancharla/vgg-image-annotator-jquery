(function ( $ ) {
  $.fn.via = function( options ) {
    var defaults = {/* TODO: expose config for color of the shapes */},
      settings = $.extend({}, defaults, options),
      me = this,
      viaReferences = [],
      zoomLevel = 1,
      zoomStep = 0.2;

    me.each(function(i) {
      viaReferences[i] = new _via(this)
    });

    me.import = function(projectConfig) {
        viaReferences[0].d.project_load_json(projectConfig)
        return this;
    };
    me.export = function() {
        return viaReferences[0].d.store;
    };
    me.import(settings.config);

    me.zoomIn = function() {
      zoomLevel += zoomStep;
      viaReferences[0]._set_zoom_level(zoomLevel);
    }

    me.zoomOut = function() {
      if (zoomLevel <= 1) {
        return;
      }
      zoomLevel -= zoomStep;
      viaReferences[0]._set_zoom_level(zoomLevel);
    }

    return me;
  };
}( jQuery ));
