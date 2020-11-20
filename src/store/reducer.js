import * as actionTypes  from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT :
            return {
                ...state,
                results: state.results.concat(state.counter)  //Use concat to update results as this just create snapshot of & doesn't (push)change to the actual state
            }  //  results: state.results.concat({id: new Date(), value: state.counter}) doesn't work 
        case actionTypes.DELETE_RESULT :
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter((result) => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    
    return state;
}

export default reducer;