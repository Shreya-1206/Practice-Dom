import { getShoppingList , getCompletedList} from "./model";
import Item from "./Item";

const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');

export const renderShoppingList = () => {

   let domNodes = getShoppingList().map(({item, priority, id}) => {
    return Item(item, priority, id);

   }); /// its in html string
    
   shoppingListDiv.innerHTML = domNodes.join('');
}


export const renderCompletedList = () => {

    let domNodes = getCompletedList().map(({item, priority, id}) => {
     return Item(item, priority, id);
 
    });
     
    completedDiv.innerHTML = domNodes.join('');
}




