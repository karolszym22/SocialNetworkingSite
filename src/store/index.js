import { createStore } from  'redux';
import posts from '../reducers/index'





const store = createStore(posts,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),);

export default store;





    

