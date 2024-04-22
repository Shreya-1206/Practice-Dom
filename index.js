import Item from "./Item.js";
const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');
const clearCompletedBtn = document.querySelector('#clear-completed');

shoppingListDiv.innerHTML += Item('Satitary Pad', 'normal', 1);