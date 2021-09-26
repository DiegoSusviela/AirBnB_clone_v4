$(document).ready(function () {
  const obj = {};
  $('.amenities .popover input').click(function () {
    if (this.checked) {
      obj[$(this).data('id')] = $(this).data('name');
    } else {
      delete obj[$(this).data('id')];
    }
    const names = Object.values(obj);
    if (names.length() === 0) {
      $('.amenities h4').html('&nbsp;');      
    } else {
      $('.amenities h4').text(names.sort().join(', '));
    }
  });
});
