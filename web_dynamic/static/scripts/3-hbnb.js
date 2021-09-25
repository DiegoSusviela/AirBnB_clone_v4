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

const $places = $('section.places');
$.ajax({
  type: POST,
  url: 'http://' + location.hostname + ':5001/api/v1/places_search/',
  contentType: 'application/json',
  data: '{}',
  success: function (data) {
    $.each(data, function (i, place) {
      $places.append('<article><div class="title_box"><h2>'+ place.name +'</h2><div class="price_by_night">$'+ place.price_by_night +'</div></div><div class="information"><div class="max_guest">'+ place.max_guest +' Guests</div><div class="number_rooms">'+ place.number_rooms +' Bedrooms</div><div class="number_bathrooms">'+ place.number_bathrooms +' Bathrooms</div></div><div class="user"><b>Owner:</b> '+ place.user.first_name +' '+ place.user.last_name +'</div><div class="description">'+ place.description | safe +'</div></article>');
    });
  }
});