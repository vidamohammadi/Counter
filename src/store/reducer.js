const inistialState = {
    counter : 0
}

const reducer = (state = inistialState , action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return{
                counter: state.counter - 1
        }
        case 'ADD':
            return{
                counter: state.counter + action.value
        }
        case 'SUB':
            return{
                counter: state.counter - action.value
        }
        default:
            return state
    }
}

export default reducer