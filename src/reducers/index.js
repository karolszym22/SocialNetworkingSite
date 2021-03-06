import { act } from "react-dom/cjs/react-dom-test-utils.production.min";


const initialState = 
{
    posts : 
    [
        {
            user: 'Karol Szymański',
            content: 'Jestem super ale React jest lepszy',
            id: 1,
        },
        {
            user: 'Karol Szymański',
            content: 'Jestem super ale JS jest lepszy',
            id: 2,
        },
        {
            user: 'Karol Szymański',
            content: 'Jestem super ale Node jest lepszy',
            id: 3,
        },
        {
            user: 'Karol Szymański',
            content: 'Jestem super ale Angular jest lepszy',
            id: 4,
        },
        {
            user: 'Karol Szymański',
            content: 'Jestem super ale MongoDB jest lepszy',
            id: 5,
        },
    ]
}


const rootReducer = (state = initialState, action) => {
  
   switch (action.type)
   {
       case 'DELETE_POST':
           return {
               ...state,[action.payload.itemType]: [
                   ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
               ],

               
           };
         

       case 'ADD_POST':
           return {
               ...state,
               [action.payload.itemType]: [
                   ...state[action.payload.itemType],
                   action.payload.itemContent
               ],
               
               
           };
           default:
            return state;
   };
   

};


export default rootReducer;