import * as actionTypes from './actions'
const inistialState = {
    counter: 0,
    result: []
}

const reducer = (state = inistialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.RESULT:
            return {
                ...state,
                result: state.result.concat(state.counter)
            }
        default:
            return state
    }
}

export default reducer