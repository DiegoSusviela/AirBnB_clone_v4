$(document).ready(function() {
    const obj = {};
    $('.check').click(function() {
        $('#checkId').prop('checked', true);
        obj[$(this).attr('data-name')] = $(this).attr('data-id');
      });
    $('.uncheck').click(function() {
        $('#checkId').prop('checked', false);
        delete obj[$(this).attr('data-name')];
      });
      const names = Object.keys(obj);
      $('.amenities h4').text(names.sort().join(', '));
  });
