'use strict';
(function () {

  var overflowClass = 'overflow';
  var modalShowClass = 'modal--show';
  var mapShowClass = 'map--show';
  var orderDialogClass = 'order-dialog--show';
  var modalErrorClass = 'modal__error';

  var openButtonsElement = document.querySelectorAll('.card__price-button, .card__button--green');
  var closeElement = document.querySelectorAll('.close');
  var bodyElement = document.querySelector('body');
  var popupElement = document.querySelector('.order-dialog');
  var modalElement = document.querySelector('.modal');
  var modalWrapper = modalElement.querySelector('.modal__wrapper');
  var modalFormClass = modalElement.querySelector('.modal__form');
  var popupMapElement = document.querySelector('.map');
  var openModalElement = document.querySelector('.contacts__button-link');
  var openPopupMapElement = document.querySelector('.contacts-map__link');
  var modalNameElement = modalElement.querySelector('#input-name');
  var modalEmailElement = modalElement.querySelector('#input-email');
  var modalTextElement = modalElement.querySelector('#input-text');

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem('modalNameElement');
  } catch (error) {
    isStorageSupport = false;
  }

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

    if (storage) {
      modalNameElement.value = storage;
      modalEmailElement.focus();
    } else {
      modalNameElement.focus();
    }
  };

  var modalLocalStorage = function(evt) {

    if (!modalNameElement.value || !modalEmailElement.value || !modalTextElement.value) {
      evt.preventDefault();
      modalWrapper.classList.add(modalErrorClass);
    } else {

      if (isStorageSupport) {
        localStorage.setItem('modalNameElement', modalNameElement.value);
        localStorage.setItem('modalEmailElement', modalEmailElement.value);
        localStorage.setItem('modalTextElement', modalTextElement.value);
      }
    }
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

  modalFormClass.addEventListener('submit', modalLocalStorage
  );

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
