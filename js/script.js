var popup = document.querySelector('.map');
var openPopup = document.querySelector('.contacts-map__link');
var closePopup = popup.querySelector('.close');
var mapShow = 'map--show';

openPopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add(mapShow);
});
closePopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove(mapShow);
})
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode===27){
    popup.classList.remove(mapShow);
  }
})
