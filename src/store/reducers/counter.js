import * as actionTypes  from '../actions';

const initialState = {
    counter: 0
}
/*
     case 'INCREMENT' :
        const newState = Object.assign({}, state);
        newState.counter = state.counter + 1;
        return newState
*/
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT :
            return {
                ...state,
                counter : state.counter + 1
            }
        case actionTypes.DECREMENT :
            // Below return statement: it distribute the state object and overwrite the counter value as it was already ther in state object
            return {                
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD :
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT :
            return {
                ...state,
                counter: state.counter - action.val
            }
    }
    
    return state;
}

export default reducer;