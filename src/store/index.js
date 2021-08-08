import { createStore } from  'redux';
import posts from '../reducers/index'
const store = createStore(posts);

export default store;