

/* CAKE SHOP SCENARIO */

*  A STORE that holds the state of our application *
// 1 - Redux - is like a store that holds the the cakes in a shelf = Holds the state of our Application
<!--  -->

*  B ACTION that describes the changes in the state of the application *
// 2 - Action - is an intention from a customer to buy a cake - the action describes what happened.
in our scenario the action describes that the number of cakes has to be reduced by one

- The only way our app can interact with the store
- Carry some information from our app to the redux store
- Should be a Plain Jvascript Object
- Have a 'type' property that indicates the type of action being performed
- The 'type' property is tipically defined as string constans
<!--  -->

*  C REDUCER which actually carries out the state transition depending on the action *
// 3 - Reducer - is what ties the store and the acitons together.
in our scenario the reducer is the shopkeeper he receives the actions buy from a customer and remeoves the cake from the shelf which is the storeThreeCoreConcepts

- Specify how the application state changes in responses to The actions send to the stores
- actions only describes what happend but dont describe how the app state changes
- Reducer is a function that aaccepts state and action as arguments and returns the newly change state 



REDUX IS MAINLY formed around these three core concepts