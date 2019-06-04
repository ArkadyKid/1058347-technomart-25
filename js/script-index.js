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
};

openModalElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalElement.classList.add(modalShowClass);
});

closeModalElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalElement.classList.remove(modalShowClass);
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27){
    modalElement.classList.remove(modalShowClass);
  }
});

openPopupMapElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMapElement.classList.add(mapShowClass);
});

closePopupMapElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMapElement.classList.remove(mapShowClass);
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27){
    popupMapElement.classList.remove(mapShowClass);
  }
});

closePopupElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupElement.classList.remove(orderDialogClass);
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27){
    popupElement.classList.remove(orderDialogClass);
  }
});
