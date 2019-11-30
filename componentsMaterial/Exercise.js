/* EXERCISES dispaching an ACTION */
// 1 - Creating the STORE
// 2 - Creating the ACTION 
// 3 - Implementing the REDUCER
// 4 - Dispatching the action
// updating the initial state from false to true
// follow the notes in the ACTION , REDUCER, STORE files.
const redux = require('redux');  
const createStore = redux.createStore



const LOGIN = "LOGIN"

function loginAction () {
    return {
        type: "LOGIN"
    }
}

const defaultState = { login : false}
const reducer = (state=defaultState, action) => {
        switch(action.type){
            case LOGIN : return {
                ...state,
                login : state.login = true
            }

            default : return state
        }
}

const store = createStore(reducer)
console.log('intial state', store.getState());                                            // 2/4 step (is the 2nd logical step )
const unsubscribe = store.subscribe(() => console.log('updatedState', store.getState())); // 5 step
store.dispatch(loginAction())