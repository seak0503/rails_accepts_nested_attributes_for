$.fn.extend({
  /**
    * マルチセレクトフォームでselectedになっているvalをhiddenフォームに埋め込む
  */
  railsAcceptsNestedAttributesForSelectToHidden:function(options) {
    var settings = $.extend({
      'object'     : 'object_name',
      'association' : 'association_name',
      'index'       : 0,
      'parameter'   : 'parameter'
    }, options);

    var $this = $(this),
      vals = $this.val();
      className = "rails-accepts-nested-attributes-for-select-to-hidden"
    $this.siblings("input[type=hidden]." + className).remove();
    if (vals) {
      $.each(vals, function (i, val) {
        var id = settings.object + "_" + settings.association + "_attributes_" + settings.index + "_" + settings.parameter,
          name = settings.object + "[" + settings.association + "_attributes][" + settings.index + "][" + settings.parameter + "]";
        $this.after($('<input type="hidden">').attr('id', id).attr('name', name).val(val).addClass(className));
        settings.index += 1;
      });
    }
    event.preventDefault();
  }
});