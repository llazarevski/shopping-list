$('#js-shopping-list-form').submit(function addNewItem(){
    event.preventDefault();
    var newItemText = $('#shopping-list-entry').val();
    var newItem = `<li>
          <span class="shopping-item"> ${newItemText} </span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`;
    $('.shopping-list').append(newItem);
    $('#shopping-list-entry').val('');
});



$('.shopping-list').on('click', '.shopping-item-delete', function(){
  $(this).closest('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(){
     $(this).closest('li').children('span').toggleClass('shopping-item__checked');                      
 });
