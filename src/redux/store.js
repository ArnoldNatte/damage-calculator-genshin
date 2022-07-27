//  ****************************
// Redux guia ******************
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/rootReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    process.env.NODE_ENV === "production"
        ? applyMiddleware(thunk)
        : composeEnhancers(applyMiddleware(thunk))
);

export default store;

/*
const initialState = {
    numeroHome: 4,
    numeroHeader: 7,
    colores: [
    {
        id: 1,
        color: 'red'
    },
    {
        id: 2,
        color: 'blue'
    },
    {
        id: 3,
        color: 'green'
    },
    {
        id: 4,
        color: 'yellow'
    }
    ],
    colorElejido: "red"
}
*/
//  **************************** 