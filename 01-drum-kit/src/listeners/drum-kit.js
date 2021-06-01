import {removeTransition, playSound } from '../handlers/drum-kit.js';

// window.addEventListener('keydown', function(e){
// console.log(e);
// })
const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);