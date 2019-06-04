var popupElement = document.querySelector('.order-dialog');
var orderDialogClass = 'order-dialog--show';
var closePopupElement = popupElement.querySelector('.close');

var openPopup = function(evt) {
  evt.preventDefault();
  popupElement.classList.add(orderDialogClass);
};

closePopupElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupElement.classList.remove(orderDialogClass);
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27){
    popupElement.classList.remove(orderDialogClass);
  }
});
