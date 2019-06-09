'use strict';
(function () {
  var overflowClass = 'overflow';
  var orderDialogClass = 'order-dialog--show';
  var linkRedClass = 'customer-menu__link--red';

  var addBookmarksElement = document.querySelectorAll('.card__button--white');
  var bodyElement = document.querySelector('body');
  var closeElement = document.querySelectorAll('.close, .link-button__button--white, .overlay');
  var linkBookmarksElement = document.querySelector('.customer-menu__link--bookmark');
  var linkCartElement = document.querySelector('.customer-menu__link--cart');
  var openButtonsElement = document.querySelectorAll('.card__price-button, .card__button--green');
  var popupElement = document.querySelector('.order-dialog');
  var valueBookmarksElement = document.querySelector('.customer-menu__value--bookmark');
  var valueCartElement = document.querySelector('.customer-menu__value--cart');

  var bookmarksValue = function(evt) {
    evt.preventDefault();
    linkBookmarksElement.classList.add(linkRedClass);
    valueBookmarksElement.innerHTML ++;
  };

  var openPopup = function(evt) {
    evt.preventDefault();
    popupElement.classList.add(orderDialogClass);
    bodyElement.classList.add(overflowClass);
    linkCartElement.classList.add(linkRedClass);
    valueCartElement.innerHTML ++;
  };

  var mouseClose = function(evt) {
    evt.preventDefault();
    popupElement.classList.remove(orderDialogClass);
    bodyElement.classList.remove(overflowClass);
  };

  var escClosePopup = function(evt) {
    if (evt.keyCode === 27){
      popupElement.classList.remove(orderDialogClass);
      bodyElement.classList.remove(overflowClass);
    }
  };

  openButtonsElement.forEach(function(element) {
    element.addEventListener('click', openPopup);
  });

  addBookmarksElement.forEach(function(element) {
    element.addEventListener ('click', bookmarksValue);
  });

  closeElement.forEach(function(element) {
    element.addEventListener('click', mouseClose);
  });

  document.addEventListener('keydown', escClosePopup
  );

}());
