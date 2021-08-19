export const removeItem = (itemType, id) =>
{   
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
   
    
    return{
        type: "ADD_POST",
        payload: {
            itemType,
            itemContent,
           
        },
        
    };
};