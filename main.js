const phone = document.querySelector('.phone');
const phoneWidth = phone.getBoundingClientRect().width;

phone.addEventListener('mousemove', function(e){
  
  const x = e.offsetX; 
  if((phoneWidth / 2) < x) {
    phone.classList.remove('left')
    phone.classList.add('right')
  } else {
    phone.classList.remove('right')
    phone.classList.add('left')
  }

})

phone.addEventListener('mouseout', function(e){
  phone.setAttribute('class', 'phone')
})