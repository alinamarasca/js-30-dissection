import { addItem } from '../handlers/handler.js'

const addItems = document.querySelector('.add-items');

addItems.addEventListener('submit', addItem);

const itemsList = document.querySelector('.plates');

itemsList.addEventListener('click', itemsList);



