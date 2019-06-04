var bodyElement = document.querySelector('.body');
var overflowClass = 'overflow';
var modalElement = document.querySelector('.modal');
var openModalElement = document.querySelector('.contacts__button-link');
var closeModalElement = modalElement.querySelector('.close');
var modalShowClass = 'modal--show';
var popupMapElement = document.querySelector('.map');
var openPopupMapElement = document.querySelector('.contacts-map__link');
var closePopupMapElement = popupMapElement.querySelector('.close');
var mapShowClass = 'map--show';
var popupElement = document.querySelector('.order-dialog');
var orderDialogClass = 'order-dialog--show';
var closePopupElement = popupElement.querySelector('.close');

var openPopup = function(evt) {
  evt.preventDefault();
  popupElement.classList.add(orderDialogClass);
  bodyElement.classList.add(overflowClass);
};

openModalElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalElement.classList.add(modalShowClass);
  bodyElement.classList.add(overflowClass);
});

closeModalElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalElement.classList.remove(modalShowClass);
  bodyElement.classList.remove(overflowClass);
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27){
    modalElement.classList.remove(modalShowClass);
    bodyElement.classList.remove(overflowClass);
  }
});

openPopupMapElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMapElement.classList.add(mapShowClass);
  bodyElement.classList.add(overflowClass);
});

closePopupMapElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMapElement.classList.remove(mapShowClass);
  bodyElement.classList.remove(overflowClass);
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27){
    popupMapElement.classList.remove(mapShowClass);
    bodyElement.classList.remove(overflowClass);
  }
});

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
