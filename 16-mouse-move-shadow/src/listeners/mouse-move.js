import { shadow } from '../handlers/mouse-move.js'

export const hero = document.querySelector('.hero');

export const text = hero.querySelector('h1');

export const walk = 500; 

hero.addEventListener('mousemove', shadow);
// window.addEventListener('mousemove', function(e){
// console.log(e);
// })

//  module.exports = {hero, text, walk};