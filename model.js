let shoppingList = [];

export const addingItem = (item) => {
    const createId = `${parseInt(Math.random()* 100000)} ${new Date().getTime()}`;

    shoppingList.push({
        id : createId,
        item,
        priority : 'normal'
    })
}
console.log(shoppingList);

export const setPriority = (itemId, priority) => {
    shoppingList = shoppingList.map((item) => {
        if(itemId === item.id){
            return {
                ...item,
                priority,
            };
        }
        return item;
    })
}
console.log(shoppingList);

export const getShoppingList = () => shoppingList;

