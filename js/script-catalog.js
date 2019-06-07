'use strict';
(function () {

  var overflowClass = 'overflow';
  var orderDialogClass = 'order-dialog--show';

  var openButtonsElement = document.querySelectorAll('.card__price-button, .card__button--green');
  var closeElement = document.querySelectorAll('.close');
  var bodyElement = document.querySelector('body');
  var popupElement = document.querySelector('.order-dialog');

  var openPopup = function(evt) {
    evt.preventDefault();
    popupElement.classList.add(orderDialogClass);
    bodyElement.classList.add(overflowClass);
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

  closeElement.forEach(function(element) {
    element.addEventListener('click', mouseClose);
  });

  document.addEventListener('keydown', escClosePopup
  );

}());
