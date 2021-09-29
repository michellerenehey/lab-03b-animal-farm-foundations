// images
const horseImg = document.getElementById('horse'); 
const dogImg = document.getElementById('dog');
const catImg = document.getElementById('cat')

// sounds
const horseSound = document.getElementById('horse-sound')
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

// sounds with clicks

  horseImg.addEventListener('click', ()=>{
    horseSound.play();
  });

  dogImg.addEventListener('click', ()=>{
    dogSound.play();
  });

  catImg.addEventListener('click', ()=>{
    catSound.play();
  });

  // sounds with keys
  document.addEventListener('keydown', function (event) {
    if (event.key === 'd') {
      dogSound.play();
    }});

  document.addEventListener('keydown', function (event) {
    if (event.key === 'h') {
      horseSound.play();
    }});

  document.addEventListener('keydown', function (event) {
    if (event.key === 'c') {
      catSound.play();
    }});