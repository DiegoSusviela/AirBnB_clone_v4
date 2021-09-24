
$(document).ready(function() {
    const obj = {};
    $('.amenities .popover input').click(function() {
        alert('clickeo');
        if ($(this).porp('checked', true)) {
          alert('esta clickeado');
        } else { 
          alert('no esta clickeado');
        }



        
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
