'use strict';
(function () {

  var overflowClass = 'overflow';
  var orderDialogClass = 'order-dialog--show';

  var bodyElement = document.querySelector('body');
  var popupElement = document.querySelector('.order-dialog');
  var openButtonsElement = document.querySelectorAll('.card__price-button, .card__button--green');
  var closePopupElement = popupElement.querySelector('.close');

  var openPopup = function(evt) {
    evt.preventDefault();
    popupElement.classList.add(orderDialogClass);
    bodyElement.classList.add(overflowClass);
  };
  var mouseClosePopup = function(evt) {
    evt.preventDefault();
    popupElement.classList.remove(orderDialogClass);
    bodyElement.classList.remove(overflowClass);
  };

  openButtonsElement.forEach(function(element) {
    element.addEventListener('click', openPopup);
  });

  popupElement.addEventListener('click', mouseClosePopup(evt)
  );

  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27){
      popupElement.classList.remove(orderDialogClass);
      bodyElement.classList.remove(overflowClass);
    }
  });
}());
