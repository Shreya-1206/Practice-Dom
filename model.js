let shoppingList = [];
let completedList =[];


export const addingItem = (item) => {
    const createId = `${parseInt(Math.random()* 100000)} ${new Date().getTime()}`;

    shoppingList.push({
        id : createId,
        item,
        priority : 'normal'
    })
}
console.log(shoppingList);

export const completedItem = (itemId) => {
    const getItem = shoppingList.find(({ id}) => id === itemId);   /// why not item.id doubt
    shoppingList = shoppingList.filter(({ id }) => id !== itemId);
    completedList = [getItem, ...completedList];
    console.log(completedList);
}


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

export const removeItem = function(itemId){
    shoppingList = shoppingList.filter((item) => item.id !== itemId);

    return shoppingList;
}
export const clearCompleted = () => (completedList= []);

export const getShoppingList = () => shoppingList;

export const getCompletedList = () => completedList;

