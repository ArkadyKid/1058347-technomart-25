'use strict';
(function () {
  var modalShowClass = 'modal--show';
  var mapShowClass = 'map--show';
  var orderDialogClass = 'order-dialog--show';
  var modalErrorClass = 'modal__error';
  var linkRedClass = 'customer-menu__link--red';
  var nameStorage = '';
  var emailStorage = '';

  var isStorageSupport = true;

  var addBookmarksList = document.querySelectorAll('.card__button--white');
  var addBookmarksArray = Array.prototype.slice.call(addBookmarksList);
  var closeList = document.querySelectorAll('.close, .link-button__button--white, .overlay');
  var closeArray = Array.prototype.slice.call(closeList);
  var openButtonsList = document.querySelectorAll('.card__price-button, .card__button--green');
  var openButtonsArray = Array.prototype.slice.call(openButtonsList);
  var linkBookmarksElement = document.querySelector('.customer-menu__link--bookmark');
  var linkCartElement = document.querySelector('.customer-menu__link--cart');
  var modalElement = document.querySelector('.modal');
  var modalWrapperElement = modalElement.querySelector('.modal__wrapper');
  var modalFormElement = modalElement.querySelector('.modal__form');
  var modalNameElement = modalElement.querySelector('#input-name');
  var modalEmailElement = modalElement.querySelector('#input-email');
  var modalTextElement = modalElement.querySelector('#input-text');
  var openModalElement = document.querySelector('.contacts__button');
  var openPopupMapElement = document.querySelector('.contacts-map__link');
  var popupElement = document.querySelector('.order-dialog');
  var popupMapElement = document.querySelector('.map');
  var valueBookmarksElement = document.querySelector('.customer-menu__value--bookmark');
  var valueCartElement = document.querySelector('.customer-menu__value--cart');

  var openMap = function(evt) {
    evt.preventDefault();
    popupMapElement.classList.add(mapShowClass);
  };

  var bookmarksValue = function(evt) {
    evt.preventDefault();
    linkBookmarksElement.classList.add(linkRedClass);
    valueBookmarksElement.innerHTML++;
  };

  var openPopup = function(evt) {
    evt.preventDefault();
    popupElement.classList.add(orderDialogClass);
    linkCartElement.classList.add(linkRedClass);
    valueCartElement.innerHTML++;
  };

  var openModal = function(evt) {
    evt.preventDefault();
    modalElement.classList.add(modalShowClass);

    if (nameStorage && emailStorage) {
      modalNameElement.value = nameStorage;
      modalEmailElement.value = emailStorage;
      modalTextElement.focus();
    } else {
      modalNameElement.focus();
    }
  };

  var modalLocalStorage = function(evt) {
    if (!modalNameElement.value || !modalEmailElement.value || !modalTextElement.value) {
      evt.preventDefault();
      modalWrapperElement.classList.add(modalErrorClass);
    } else {

      if (isStorageSupport) {
        localStorage.setItem('modalNameElement', modalNameElement.value);
        localStorage.setItem('modalEmailElement', modalEmailElement.value);
      }
    }
  };

  var mouseClose = function(evt) {
    evt.preventDefault();
    popupElement.classList.remove(orderDialogClass);
    modalElement.classList.remove(modalShowClass);
    popupMapElement.classList.remove(mapShowClass);
  };

  var escClose = function(evt) {
    if (evt.keyCode === 27){
      popupElement.classList.remove(orderDialogClass);
      modalElement.classList.remove(modalShowClass);
      popupMapElement.classList.remove(mapShowClass);
    }
  };

  try {
    nameStorage = localStorage.getItem('modalNameElement');
    emailStorage = localStorage.getItem('modalEmailElement');
  } catch (error) {
    isStorageSupport = false;
  };

  modalFormElement.addEventListener('submit', modalLocalStorage
  );

  openButtonsArray.forEach(function(element) {
    element.addEventListener('click', openPopup);
  });

  addBookmarksArray.forEach(function(element) {
    element.addEventListener ('click', bookmarksValue);
  });

  openModalElement.addEventListener('click', openModal
  );

  openPopupMapElement.addEventListener('click', openMap
  );

  document.addEventListener('keydown', escClose
  );

  closeArray.forEach(function(element) {
    element.addEventListener('click', mouseClose);
  });

}());
