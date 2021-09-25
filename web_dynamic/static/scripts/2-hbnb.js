$(document).ready(function() {
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', data => {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  })
});


$(document).ready(function() {
    const obj = {};
    $('.amenities .popover input').click(function() {
        if (this.checked) {
          obj[$(this).data('id')] = $(this).data('name');
        } else {
          delete obj[$(this).data('id')];
        }
        const names = Object.values(obj);
        $('.amenities h4').text(names.sort().join(', '));
      });
  });
