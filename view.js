import { getShoppingList } from "./model";
import Item from "./Item";

const shoppingListDiv = document.querySelector('.shopping-list');
export const renderShoppingList = () => {

   let domNodes = getShoppingList().map(({item, priority, id}) => {
    return Item(item, priority, id);

   }); /// its in html string
    
   shoppingListDiv.innerHTML = domNodes.join('');
}



