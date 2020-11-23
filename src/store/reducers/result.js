import * as actionTypes  from '../actions';

const initialState = {
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
        case actionTypes.STORE_RESULT :
            return {
                ...state,
                results: state.results.concat(action.result)  //Use concat to update results as this just create snapshot of & doesn't (push)change to the actual state
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