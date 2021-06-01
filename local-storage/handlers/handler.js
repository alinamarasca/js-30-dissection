import { items, storeItems } from '../data.js'

import { populateList } from '../procedures/procedure.js'



const addItem = (e) => {
    e.preventDefault();
    const text = e.currentTarget.querySelector('[name=item]').value;
    const item = {
      text,
      done: false,
    };

    const itemsList = document.querySelector('.plates');
    items.push(item);
    populateList(items, itemsList);
    storeItems(items);
    e.currentTarget.reset();
  }

  export { addItem }



