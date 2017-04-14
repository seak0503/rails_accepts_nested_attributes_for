$(function () {
  $('form').on('click', '.remove_fields', function (event) {
    $(this)
    .prev('input[type=hidden]').val('1')
    .closest('fieldset').hide();
    event.preventDefault();
  });
  $('form').on('click', '.add_fields',function (event) {
    var $this = $(this),
      time = new Date().getTime(),
      regexp = new RegExp($this.data('id'), 'g');
    $this.before($this.data('fields').replace(regexp, time));
    event.preventDefault();
  });
  $('form').on('change', 'select', function (event) {
    var $this = $(this),
      vals = $this.val(),
      $next = $this.next();
    $this.siblings(".hige").remove();
    $.each(vals, function (i, val) {
      var time = new Date().getTime(),
        regexp = new RegExp($next.data('id'), 'g'),
        id = $next.attr('id'),
        name = $next.attr('name'),
        newId = id.replace(regexp, time),
        newName = name.replace(regexp, time);
      $next.after($('<input type="hidden">').attr('id', newId).attr('name', newName).val(val).addClass("hige"));
    });
    event.preventDefault();

  });
});