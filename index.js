import Item from "./Item.js";
import {addingItem } from "./model.js";
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
       evt.target.value ='';
    }

    
})
// shoppingListDiv.innerHTML += Item('Satitary Pad', 'normal', 1);