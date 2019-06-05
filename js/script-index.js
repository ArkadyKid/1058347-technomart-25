'use strict';
(function () {

  var overflowClass = 'overflow';
  var modalShowClass = 'modal--show';
  var mapShowClass = 'map--show';
  var orderDialogClass = 'order-dialog--show';

  var openButtonsElement = document.querySelectorAll('.card__price-button, .card__button--green');
  var closeElement = document.querySelectorAll('.close');
  var bodyElement = document.querySelector('body');
  var popupElement = document.querySelector('.order-dialog');
  var modalElement = document.querySelector('.modal');
  var popupMapElement = document.querySelector('.map');
  var openModalElement = document.querySelector('.contacts__button-link');
  var openPopupMapElement = document.querySelector('.contacts-map__link');

  var openMap = function(evt) {
    evt.preventDefault();
    popupMapElement.classList.add(mapShowClass);
    bodyElement.classList.add(overflowClass);
  };

  var openPopup = function(evt) {
    evt.preventDefault();
    popupElement.classList.add(orderDialogClass);
    bodyElement.classList.add(overflowClass);
  };

  var openModal = function(evt) {
    evt.preventDefault();
    modalElement.classList.add(modalShowClass);
    bodyElement.classList.add(overflowClass);
  };

  var mouseClose = function(evt) {
    evt.preventDefault();
    popupElement.classList.remove(orderDialogClass);
    modalElement.classList.remove(modalShowClass);
    popupMapElement.classList.remove(mapShowClass);
    bodyElement.classList.remove(overflowClass);
  };

  var escClose = function(evt) {
    if (evt.keyCode === 27){
      popupElement.classList.remove(orderDialogClass);
      modalElement.classList.remove(modalShowClass);
      popupMapElement.classList.remove(mapShowClass);
      bodyElement.classList.remove(overflowClass);
    }
  };

  openButtonsElement.forEach(function(element) {
    element.addEventListener('click', openPopup);
  });

  openModalElement.addEventListener('click', openModal
  );

  openPopupMapElement.addEventListener('click', openMap
  );

  document.addEventListener('keydown', escClose
  );

  closeElement.forEach(function(element) {
    element.addEventListener('click', mouseClose);
  });
}());
