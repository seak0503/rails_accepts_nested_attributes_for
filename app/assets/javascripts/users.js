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
});