$.fn.extend({
  /**
    * マルチセレクトフォームでselectedになっているvalをhiddenフォームに埋め込む
  */
  railsAcceptsNestedAttributesForForm:function(options) {
    var settings = $.extend({
      'object'     : 'object_name',
      'association' : 'association_name',
      'index'       : 0,
      'parameter'   : 'parameter',
      'targetType' : 'hidden'
    }, options);

    var $this = $(this),
      vals = $this.val();
    if (settings.targetType == 'hidden') {
      toHidden($this, vals);
    }
    event.preventDefault();

    function toHidden($this, vals) {
      $this.siblings("input[type=hidden].rails-accepts-nested-attributes-for-form-hidden").remove();
      if (vals) {
        $.each(vals, function (i, val) {
          var id = settings.object + "_" + settings.association + "_attributes_" + settings.index + "_" + settings.parameter,
            name = settings.object + "[" + settings.association + "_attributes][" + settings.index + "][" + settings.parameter + "]";
          $this.after($('<input type="hidden">').attr('id', id).attr('name', name).val(val).addClass("rails-accepts-nested-attributes-for-form-hidden"));
          settings.index += 1;
        });
      }
    }
  }
});