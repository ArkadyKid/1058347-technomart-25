var popup = document.querySelector('.modal');
var openPopup = document.querySelector('.contacts__button-link');
var closePopup = popup.querySelector('.close');
var modalShow = 'modal--show';
var popupMap = document.querySelector('.map');
var openPopupMap = document.querySelector('.contacts-map__link');
var closePopupMap = popupMap.querySelector('.close');
var mapShow = 'map--show';

openPopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add(modalShow);
});
closePopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove(modalShow);
})
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode===27){
    popup.classList.remove(modalShow);
  }
})

openPopupMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.add(mapShow);
});
closePopupMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove(mapShow);
})
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode===27){
    popupMap.classList.remove (mapShow);
  }
})
