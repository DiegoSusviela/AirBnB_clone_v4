$(document).ready(function() {
  $.get('http://' + location.hostname + ':5001/api/v1/status/', function (data, status) {
    if (status === 'success') {
      if (data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
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

$.ajax({
  type: 'POST',
  url: 'http://' + location.hostname + ':5001/api/v1/places_search/',
  contentType: 'application/json',
  data: '{}',
  success: function (data) {
    $.each(data, function (i, place) {
      $('section.places').append('<h2>HOLA</h2>');
    });
  }
});