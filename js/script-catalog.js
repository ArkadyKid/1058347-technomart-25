var popup = document.querySelector('.order-dialog');
var orderDialog = 'order-dialog--show';
var closePopup = popup.querySelector('.close');
var openPopup = function(evt) {
  evt.preventDefault();
  popup.classList.add(orderDialog);
};

closePopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove(orderDialog);
})
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode===27){
  popup.classList.remove(orderDialog);
 }
})
