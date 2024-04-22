let shoppingList = [];

export const addingItem = (item) => {
    const createId = `${parseInt(Math.random()* 100000)} ${new Date().getTime()}`;

    shoppingList.push({
        id : createId,
        name : item,
        priority : 'normal'
    })
}

export const getShoppingList = () => shoppingList;

