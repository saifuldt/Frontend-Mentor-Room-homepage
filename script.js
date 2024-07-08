
// Desktop

$('document').ready(function () {
  // next button click event
  $('.nextBtn').click(function () {
    // select image slides
    let current = document.querySelector('.current');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    // remove class 
    $(current).removeClass('current');
    $(prev).removeClass('prev');
    $(next).removeClass('next');

    // add class 
    $(current).addClass('prev');
    $(prev).addClass('next');
    $(next).addClass('current');
  })

  // prev button click event
  $('.prevBtn').click(function () {
    // select image slides
    let current = document.querySelector('.current');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    // remove class 
    $(current).removeClass('current');
    $(prev).removeClass('prev');
    $(next).removeClass('next');

    // add class 
    $(current).addClass('next');
    $(prev).addClass('current');
    $(next).addClass('prev');
  })
});





//   mobile

$('document').ready(function () {
  // next button click event
  $('.nextBtn1').click(function () {
    // select image slides
    let current1 = document.querySelector('.current1');
    let prev1 = document.querySelector('.prev1');
    let next1 = document.querySelector('.next1');
    // remove class 
    $(current1).removeClass('current1');
    $(prev1).removeClass('prev1');
    $(next1).removeClass('next1');

    // add class 
    $(current1).addClass('prev1');
    $(prev1).addClass('next1');
    $(next1).addClass('current1');
  })

  // prev button click event
  $('.prevBtn1').click(function () {
    // select image slides
    let current1 = document.querySelector('.current1');
    let prev1 = document.querySelector('.prev1');
    let next1 = document.querySelector('.next1');

    // remove class 
    $(current1).removeClass('current1');
    $(prev1).removeClass('prev1');
    $(next1).removeClass('next1');

    // add class 
    $(current1).addClass('next1');
    $(prev1).addClass('current1');
    $(next1).addClass('prev1');
  })
});



// toggle

const menuButton = document.getElementById('subMenu');
const closeButton = document.getElementById('subMenuClose');
const subButton = document.getElementById('subButton');
const blurD = document.getElementById('blure');
const blurD1 = document.getElementById('blure1');
const blurD2 = document.getElementById('blure2');

menuButton.addEventListener('click', () => {
  subButton.style.display = 'flex';
  blurD.style.filter = 'blur(1px)';
  blurD1.style.filter = 'blur(1px)';
  blurD2.style.filter = 'blur(1px)';
})

closeButton.addEventListener('click', () => {
  subButton.style.display = 'none';
  blurD.style.filter = 'none';
  blurD1.style.filter = 'none';
  blurD2.style.filter = 'none';
})


