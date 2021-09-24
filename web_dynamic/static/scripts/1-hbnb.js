
$(document).ready(function() {
    const obj = {};
    $('.amenities .popover input').click(function() {
        if (this.checked) {
          obj[$(this).data('name')] = $(this).data('id');
          alert($(this).data('name'));
          alert($(this).attr('data-id'));
        } else {
          alert('no esta clickeado');
          delete obj[$(this).data('name')];
        }
      });
      const names = Object.values(obj);
      alert(names);
      $('.amenities h4').text(names.sort().join(', '));
  });
