import Item from "./Item.js";
import {addingItem, clearCompleted, completedItem, removeItem, setPriority } from "./model.js";
import { renderCompletedList, renderShoppingList } from "./view.js";
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

    if(evt.target.classList.contains('remove-btn')) {
        let getId = evt.target.parentElement.getAttribute('data-id');
        console.log(getId);
        if(true){
            removeItem(getId);
            renderShoppingList();
        }

    }
})

shoppingListDiv.addEventListener('dragstart', function(evt) {
    if(evt.target.classList.contains('item')){
      let getId = evt.target.getAttribute('data-id');
      evt.dataTransfer.setData('text/plain', getId)
    }
});

completedDiv.addEventListener('drop', function(evt) {

    let fetchId = evt.dataTransfer.getData('text/plain');

    if(fetchId){
        //Add  item to completed list
        completedItem(fetchId);
        //update the shopping list
        renderShoppingList();
        //update the completed list
         renderCompletedList();
      }
});

completedDiv.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });
  
clearCompletedBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    clearCompleted();
    renderCompletedList();
})  

// shoppingListDiv.innerHTML += Item('Satitary Pad', 'normal', 1);