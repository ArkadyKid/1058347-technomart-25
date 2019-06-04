var bodyElement = document.querySelector('.body');
var overflowClass = 'overflow';
var popupElement = document.querySelector('.order-dialog');
var orderDialogClass = 'order-dialog--show';
var closePopupElement = popupElement.querySelector('.close');

var openPopup = function(evt) {
  evt.preventDefault();
  popupElement.classList.add(orderDialogClass);
  bodyElement.classList.add(overflowClass);
};

closePopupElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupElement.classList.remove(orderDialogClass);
  bodyElement.classList.remove(overflowClass);
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27){
    popupElement.classList.remove(orderDialogClass);
    bodyElement.classList.remove(overflowClass);
  }
});
