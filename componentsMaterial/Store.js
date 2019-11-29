/* Redux STORE */

const redux = require('redux');  
const createStore = redux.createStore


const BUY_CAKE = "BUY_CAKE"     
const ADD_CAKE = "ADD_CAKE"
                             
function buyCake() {           
    return {                               
        type: BUY_CAKE,               
        info: 'First redux action'
    }
}
function addCake() {
    return {
        type: ADD_CAKE,
        info: 'updating the cakeStore'
    }
}

const initialState = {
    numOfCakes : 10,
    updatingTheCakes : false
}

const reducer = (state=initialState, action) => { 
    switch(action.type){                        
        case BUY_CAKE : return {
            ...state,                            
            numOfCakes: state.numOfCakes - 1
        }
        case ADD_CAKE : return {
            ...state, 
            updatingTheCakes : state.updatingTheCakes = true

        }

        default: return state
    }
}

  
const store = createStore(reducer)                                                        // 1 - the create store method accepts a parameter which is the reducer function
                                                                                          // it has the initial state of the application this is required for the store to make the state transitions based on the store the actions received
console.log('intial state', store.getState());                                            // 2/4 step (is the 2nd logical step )
const unsubscribe = store.subscribe(() => console.log('updatedState', store.getState())); // 5 step
store.dispatch(buyCake())                                                                 // 3 - step the dispatch accpets the actions as parameters
store.dispatch({type : "BUY_CAKE"})                                                                 // 3 - step the dispatch accpets the actions as parameters

store.dispatch(addCake())
unsubscribe()                                                                               // 5 step







/* Redux STORE */

// ** We will have one store for the entire application **

// RESPONSIBILITIES : 
// 1 - responsible for holding the application STATE
// 2 - allows its  STATE to be changed via the function getState()
// 3 - allows its STATE to be updated via the function dispatch(action) // accepts action as its parameter
// 4 - The store also allows the application to register LISTENERS through the function subscribe(listener)
// the subscribe method accepts a functin as a paremeter which is executed each time when the STATE in the redux store CHANGES
// 5 - you can unssubscribe to the store by calling the function that was returned by the subscribed method 