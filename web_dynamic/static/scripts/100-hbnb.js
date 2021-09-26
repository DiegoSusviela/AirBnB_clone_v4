$(document).ready(function () {
  const hostname = window.location.hostname;
  $.get('http://' + hostname + ':5001/api/v1/status/', function (data, status) {
    if (status === 'success') {
      if (data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    }
  });

  const amenities = {};
  $('.amenities .popover input').click(function () {
    if (this.checked) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    const names = Object.values(amenities);
    if (names) {
      $('.amenities h4').text(names.sort().join(', '));
    }
  });

  const states = {};
  $('.locations .popover ul li h2 input').click(function () {
    if (this.checked) {
      alert($(this).data('id'));
      states[$(this).data('id')] = $(this).data('name');
    } else {
      delete states[$(this).data('id')];
    }
    const names = Object.values(states);
    if (names) {
      $('.locations h4').text(names.sort().join(', '));
    }
  });

  const cities = {};
  $('.locations .popover ul li ul li input').click(function () {
    if (this.checked) {
      cities[$(this).data('id')] = $(this).data('name');
    } else {
      delete cities[$(this).data('id')];
    }
    const names = Object.values(cities);
    if (names) {
      $('.locations h4').text(names.sort().join(', '));
    }
  });

  const obj1 = {};
  $('.cities .popover input').click(function () {
    if (this.checked) {
		obj1[$(this).data('id')] = $(this).data('name');
    } else {
      delete obj1[$(this).data('id')];
    }
    const namess = Object.values(obj1);
    $('.cities h4').text(namess.sort().join(', '));
  });

  const obj2 = {};
  $('.states .popover input').click(function () {
    if (this.checked) {
		obj2[$(this).data('id')] = $(this).data('name');
    } else {
      delete obj2[$(this).data('id')];
    }
    const name = Object.values(obj2);
    $('.states h4').text(name.sort().join(', '));
  });


  $.ajax({
    type: 'POST',
    url: 'http://' + hostname + ':5001/api/v1/places_search/',
    contentType: 'application/json',
    data: '{}',
    success: function (data) {
      $.each(data, function (i, place) {
        $('section.places').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div><div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div></div><div class="description">' + place.description + '</div></article>');
      });
    }
  });

  $(function () {
    $('button').click(function (event) {
      $.ajax({
        type: 'POST',
        url: 'http://' + hostname + ':5001/api/v1/places_search/',
        contentType: 'application/json',
        dataType: 'JSON',
        data: JSON.stringify({ amenities: Object.keys(amenities) }),
        success: function (data) {
          $('section.places').empty();
          for (const place of data) {
            $('section.places').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div><div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div></div><div class="description">' + place.description + '</div></article>');
          }
        }
      });
    });
  });
});
