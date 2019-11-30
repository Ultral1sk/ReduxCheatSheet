/* MULTIPLE REDUCERS  scroll down*/
/* Redux STORE */
const redux = require('redux');  
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = "BUY_CAKE"     
const BUY_ICECREAM = "BUY_ICECREAM"     
                             
function buyCake() {           
    return {                               
        type: BUY_CAKE,               
        info: 'First redux action'
    }
}

function buyIceCream () {
    return {
        type : BUY_ICECREAM,
        info: ' new item added'
    }
}

                    /* single STATE */

// const initialState = {
//     numOfCakes : 10,
//     numberOfIceCreams : 20
// }

                    /* SINGLE REDUCER */
// const reducer = (state=initialState, action) => { 
//     switch(action.type){                        
//         case BUY_CAKE : return {
//             ...state,                            
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM : return {
//             ...state,
//             numberOfIceCreams : state.numberOfIceCreams - 1
//         }
       

//         default: return state
//     }
// }

const intitialCakeState = {
    numOfCakes : 10
}
const initialIceCreamState = {
    numberOfIceCreams : 20
}


const cakeReducer = (state=intitialCakeState, action) => { 
    switch(action.type){                        
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
       

        default: return state
    }
}
const iceCreamReducer = (state=initialIceCreamState, action) => { 
    switch(action.type){                        
        case BUY_ICECREAM : return {
            ...state,
            numberOfIceCreams : state.numberOfIceCreams - 1
        }
       

        default: return state
    }
}

const rootReducer = combineReducers({
    cake    : cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer)                                                        // 1 - the create store method accepts a parameter which is the reducer function
                                                                                          // it has the initial state of the application this is required for the store to make the state transitions based on the store the actions received
console.log('intial state', store.getState());                                            // 2/4 step (is the 2nd logical step )
const unsubscribe = store.subscribe(() => console.log('updatedState', store.getState())); // 5 step
store.dispatch(buyCake())        
store.dispatch(buyIceCream())                                                         // 3 - step the dispatch accpets the actions as parameters
store.dispatch({type : "BUY_CAKE"})                                                                 // 3 - step the dispatch accpets the actions as parameters
store.dispatch({type : "BUY_ICECREAM"})                                                                 // 3 - step the dispatch accpets the actions as parameters
unsubscribe()                                                                               // 5 step




/* MULTIPLE REDUCERS */
// 1 - If our application is small and we cna manage everything with one reducer then it's fine we can use it
// 2 - But if our application is HUGE then we need another REDUCER so our application is easier to track and manage
// 3 - To devide the application we need to create muliple reducer function which are going to accept multiple SEPARATE STATES
// 3.5 - the function createStore(reducer) accepts only one reducer 
// 4 - in order the use multiple reducer in redux, redux has another built in method which is redux.combineReducers
// 4.5 - convention rootReducer = combineReducers is a function that accepts an object ({  cake    : cakeReducer})  that makes new keys where the newly
//      created reducers will be called
