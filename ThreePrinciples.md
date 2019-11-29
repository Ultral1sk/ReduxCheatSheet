# Three Principles

// 1 - First Principle
//   - 'Tells us that the STATE of our whole APPLICATION is stored in an OBJECT THREE within a SINGLE STORE
//   - Maintain our application state in a single object which would be managed by the REDUX store
//   - In our case in the Cake Shop lets assume we are tracking the number of cakes on the shelf, the shelf will be an object

{
    numberOfCakes : 10
}


// 2 - Second Principle                    (emituva,prenesuva info)
// - 'The only way to CHANGE the STATE is to EMIT an ACTION, an object DESCRIBING what happened'
// - In simple terms if we want to UPDATE the state of our app, we need to let REDUX KNOW about that with an ACTION. We are not allowed to directly update the state object
// - In the cake shope example , we are not allow to DIRECTLY take the cake from the shelf instead we need to let the shopkeepr know about our ACTION -  BUY_CAKE.
// in code that would be a simple object that contains the type property inticating our intention

{
    type : 'BUY_CAKE'
}

// 3 - Third Principle
// - 'To specify how the state is TRANSFORMED by ACTIONS we write pure REDUCERS'
// - The REDUCER takes the previous state and makes an action to the state and then returns the newly updatet state
// - REDUCER - ( previousState, action ) => newState
// - In our cakeshop example the REDUCER is the SHOPKEEPER we tell him we want to buy a cake he iwll take one of the shelf, REDUCE the NUMBER of cakes by one print the receit and then hand us the cake
// - in code :

const render = (state, action) => {
    switch( action.type ) {
        case BUY_CAKE : return {
            numOfCakes : state.numOfCakes - 1
        }
    }
}