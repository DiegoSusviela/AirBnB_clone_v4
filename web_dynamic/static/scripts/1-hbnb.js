$(document).ready(function() {
    const obj = {};
    $('.check').click(function() {
        $('#checkId').prop('checked', true);
        alert('prende')
        obj[$(this).attr('data-name')] = $(this).attr('data-id');
      });
    $('.uncheck').click(function() {
        $('#checkId').prop('checked', false);
        alert('apaga')
        delete obj[$(this).attr('data-name')];
      });
      const names = Object.keys(obj);
      $('.amenities h4').text(names.sort().join(', '));
  });
