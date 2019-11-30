/* MIDDLEWARE scroll down for more info */

const redux = require('redux');  
const REDUX_LOGGER = require('redux-logger');

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applymiddleware = redux.applyMiddleware
const logger = REDUX_LOGGER.createLogger()


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
const store = createStore(rootReducer, applymiddleware(logger))                                                        // 1 - the create store method accepts a parameter which is the reducer function
                                                                                          // it has the initial state of the application this is required for the store to make the state transitions based on the store the actions received
console.log('intial state', store.getState());                                            // 2/4 step (is the 2nd logical step )
const unsubscribe = store.subscribe(() => {}); // 5 step
store.dispatch(buyCake())        
store.dispatch(buyIceCream())                                                         // 3 - step the dispatch accpets the actions as parameters
store.dispatch({type : "BUY_CAKE"})                                                                 // 3 - step the dispatch accpets the actions as parameters
store.dispatch({type : "BUY_ICECREAM"})                                                                 // 3 - step the dispatch accpets the actions as parameters
unsubscribe()                                                                               // 5 step




/* MIDDLEWARE */
// 1   - Is the suggested way to extend redux with custom functionality, meaning If we want REDUX with extra features middleware is the way to go.
// 2   - Provieds a third-party extension point between dispatching an action and the moment it reaches  the reducer
// 2.5 - Used for logging , crash reporting, performing asynchronous tasks etc.
// 3   - the Redux library provies a function Applymiddleware which is used to apply middleware
// 3.5 - We get the function from redux const applymiddleware = redux.applyMiddleware and then we apply it into the createStore by calling it the applymidleware finction
// as a second parameter after rootReducer and after then the function will contain the logger as its parameter
// *- apply middleware from redux , 2 pass it as an arguement into the store, and pass in the logger into the applymiddleware as param








