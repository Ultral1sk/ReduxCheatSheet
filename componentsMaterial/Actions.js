/* ACTIONS scroll down for definition and more information */
const BUY_CAKE = "BUY_CAKE"     // 1 define the action // 5



                               
function buyCake() {             // 4   =  action creator
    return {                               
        type: BUY_CAKE,                // 2 // 3
        info: 'First redux action'
    }
}


/* ACTIONS */

// 1 - The only way your application can interact with the store
// 2 - Carry some information from your app to the redux store
// 3 - ACTIONS are plain javascript OBJECTS they must have a `type` propertyt that indicates the `type` of action being performed
// 4 - we need an action creator that is a FUNCTIOn that returns an action
// 5 - the `type` property is tipically defined as a string constant 

