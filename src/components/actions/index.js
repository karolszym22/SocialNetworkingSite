export const removeItem = (itemType, id) =>
{   
    console.log(itemType, id);
    return{
        type: "DELETE_POST",
        payload: {
            itemType,
            id,
        },
        
    };
};


export const addItem = (itemType,itemContent) =>
{   
    const getId = () => 23;
    return{
        type: "DELETE_POST",
        payload: {
            itemType,
            itemContent,
            id: getId(),
        },
        
    };
};