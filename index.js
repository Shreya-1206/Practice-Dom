import Item from "./Item.js";
import {addingItem, setPriority } from "./model.js";
import { renderShoppingList } from "./view.js";
const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');
const clearCompletedBtn = document.querySelector('#clear-completed');


// document.addEventListener('keyup', function(evt) {
//     const key = evt.key;
//     console.log(`${key} pressed !!`)
// })

itemInput.addEventListener('keyup', function(evt){

    if(evt.key === 'Enter'){
        // Add item
       addingItem(evt.target.value);
       console.log(evt.target.value);
       renderShoppingList();
       evt.target.value ='';
    }

    
});

shoppingListDiv.addEventListener('click', function(evt) {

    if(evt.target.parentElement.classList.contains('priority-control')) {
      let priority = evt.target.classList.value;
      let getId = evt.target.parentElement.parentElement.getAttribute('data-id');
      console.log(getId);
      console.log(priority);

      setPriority(getId, priority);

      renderShoppingList();
    }

    if(evt.target.parentElement.classList.contains('remove-btn')) {


    }
   
})
// shoppingListDiv.innerHTML += Item('Satitary Pad', 'normal', 1);