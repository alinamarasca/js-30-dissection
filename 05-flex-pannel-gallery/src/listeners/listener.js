import {toggleOpen, toggleActive} from '../handlers/handler.js'

const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));