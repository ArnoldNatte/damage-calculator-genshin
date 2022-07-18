//  ****************************
// Redux guia ******************
import {createStore} from 'redux';

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

const reducerApp = (state = initialState, action) => {
    if( action.type === "CAMBIAR_COLOR") {
        console.log(action)
        return {
            ...state,
            colorElejido: action.color.color
        }
    }
    return state;
}

export default createStore(reducerApp);

//  **************************** 