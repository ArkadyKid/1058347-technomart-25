var modal = document.querySelector('.modal');
var openModal = document.querySelector('.contacts__button-link');
var closeModal = modal.querySelector('.close');
var modalShow = 'modal--show';
var popupMap = document.querySelector('.map');
var openPopupMap = document.querySelector('.contacts-map__link');
var closePopupMap = popupMap.querySelector('.close');
var mapShow = 'map--show';
var popup = document.querySelector('.order-dialog');
var orderDialog = 'order-dialog--show';
var closePopup = popup.querySelector('.close');
var openPopup = function(evt) {
  evt.preventDefault();
  popup.classList.add(orderDialog);
};

openModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add(modalShow);
});
closeModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.remove(modalShow);
})
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode===27){
    modal.classList.remove(modalShow);
  }
})

openPopupMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.add(mapShow);
});
closePopupMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.remove(mapShow);
})
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode===27){
    popupMap.classList.remove(mapShow);
  }
})

closePopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove(orderDialog);
})
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode===27){
  popup.classList.remove(orderDialog);
 }
})
