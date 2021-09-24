
$(document).ready(function() {
    const obj = {};
    $('.amenities .popover input').click(function() {
        if (this.checked) {
          obj[$(this).attr('data-name')] = $(this).attr('data-id');
          alert($(this).attr('data-name'));
          alert($(this).attr('data-id'));
        } else { 
          alert('no esta clickeado');
          delete obj[$(this).attr('data-name')];
        }
      });
      const names = Object.keys(obj);
      $('.amenities h4').text(names.sort().join(', '));
  });
