$(document).ready(function() {
    const obj = {};
    $('.check').click(function() {
        $('#checkId').prop('checked', true);
        console.log('prende')
        obj[$(this).attr('data-name')] = $(this).attr('data-id');
      });
    $('.uncheck').click(function() {
        $('#checkId').prop('checked', false);
        console.log('apaga')
        delete obj[$(this).attr('data-name')];
      });
      const names = Object.keys(obj);
      $('.amenities h4').text(names.sort().join(', '));
  });
