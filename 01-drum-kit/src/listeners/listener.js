import { playSound, removeTransition } from "../handlers/handler.js"

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

// window.addEventListener('keydown', (e) => console.log(e));