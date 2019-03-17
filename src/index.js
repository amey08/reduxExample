import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

const allReducer = combineReducers({
    products: productReducer,
    user: userReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk)
);

const store = createStore(allReducer, {
    products: [{
        name: 'apple'
    }],
    user: 'Amey'
});

console.log(store.getState());

// const updateUserAction = {
//     type: 'updateUser',
//     payload:{
//         user: 'AP'
//     }
// }

// store.dispatch(updateUserAction);
// console.log(store.getState());

// const action = {
//     type: 'changeState',
//     payload: {
//         newState: 'New State'
//     }
// }

// store.dispatch(action);
// console.log(store.getState());

ReactDOM.render(<Provider store={store}><App aRandomProp="whatever"/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
