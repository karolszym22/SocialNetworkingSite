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