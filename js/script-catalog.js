'use strict';
(function () {
  var orderDialogClass = 'order-dialog--show';
  var linkRedClass = 'customer-menu__link--red';

  var addBookmarksList = document.querySelectorAll('.card__button--white');
  var addBookmarksArray = Array.prototype.slice.call(addBookmarksList);
  var closeList = document.querySelectorAll('.close, .link-button__button--white, .overlay');
  var closeArray = Array.prototype.slice.call(closeList);
  var openButtonsList = document.querySelectorAll('.card__price-button, .card__button--green');
  var openButtonsArray = Array.prototype.slice.call(openButtonsList);
  var linkBookmarksElement = document.querySelector('.customer-menu__link--bookmark');
  var linkCartElement = document.querySelector('.customer-menu__link--cart');
  var popupElement = document.querySelector('.order-dialog');
  var valueBookmarksElement = document.querySelector('.customer-menu__value--bookmark');
  var valueCartElement = document.querySelector('.customer-menu__value--cart');

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

  var mouseClose = function(evt) {
    evt.preventDefault();
    popupElement.classList.remove(orderDialogClass);
  };

  var escClosePopup = function(evt) {
    if (evt.keyCode === 27){
      popupElement.classList.remove(orderDialogClass);
    }
  };

  openButtonsArray.forEach(function(element) {
    element.addEventListener('click', openPopup);
  });

  addBookmarksArray.forEach(function(element) {
    element.addEventListener ('click', bookmarksValue);
  });

  closeArray.forEach(function(element) {
    element.addEventListener('click', mouseClose);
  });

  document.addEventListener('keydown', escClosePopup
  );

}());
