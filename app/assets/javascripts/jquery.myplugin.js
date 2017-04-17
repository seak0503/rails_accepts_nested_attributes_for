$.fn.extend({
  /**
    * railsAcceptsNestedAttributesForを使ったセレクトフォームでselectedになっているvalueを
    * hiddenフォームに埋め込む
  */
  railsAcceptsNestedAttributesForSelectToHidden:function(options) {
    var settings = $.extend({
      'object'     : 'object_name',
      'association' : 'association_name',
      'parameter'   : 'parameter'
    }, options);
    var $this = $(this);

    $(window).load(function () {
      toHidden($this);
    });

    $this.change(function () {
      toHidden($this);
    });

    function toHidden($this) {
      var className = "rails-accepts-nested-attributes-for-select-to-hidden",
        vals = $this.val();
      $this.siblings("input[type=hidden]." + className).remove();
      if (vals) {
        $.each(vals, function (i, val) {
          var id = settings.object + "_" + settings.association + "_attributes_" + i + "_" + settings.parameter,
            name = settings.object + "[" + settings.association + "_attributes][" + i + "][" + settings.parameter + "]";
          $this.after($('<input type="hidden">').attr('id', id).attr('name', name).val(val).addClass(className));
        });
      }
      event.preventDefault();
    }
  }
});