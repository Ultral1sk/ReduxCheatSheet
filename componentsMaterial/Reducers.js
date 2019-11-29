/* REDUCERS scroll down for definition and more information */


const BUY_CAKE = "BUY_CAKE"     

function buyCake() {           
    return {                               
        type: BUY_CAKE,               
        info: 'First redux action'
    }
}



// defaultValue of the state which is going to be passed in the reducer function
const initialState = {
    numOfCakes : 10,

}

                                                   // accepts state(in this case this is the prevoius state) and action as arguments
const reducer = (state=initialState, action) => { // 1/2 
    switch(action.type){                         
        case BUY_CAKE : return {
            ...state,                             // for security we first make a copy of the state
            numOfCakes: state.numOfCakes - 1
        }
        

        default: return state
    }
}

/* REDUCERS */

// reducers that updates the state based on the actions
// 1 - They specify how the apps state changes in response to actions sent to the store
// - actions only decscribe what happened but dont describe how the app state changes reducers are in chagre of that
// 2 - Is a function that accepts state and action as arguents and returns the next state of the application 
// - const reducers = (previousState, action) => newState {}
//