/* async ACTION CREATORS scroll down for more information*/

const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware           // getting middleware from redux
const thunkMiddleware = require('redux-thunk').default  // getting thunk from redux
const axios = require('axios')                          // geting axios from axios
// state
const initialState = {
    loading : false,
    users   : [],
    error   : ''
}

// actions

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}


const fetchUsersSuccess = users => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

    /* action creator */
const fetchUsers = () => {                  // creating the callback so we can get the dispatch method
    return function(dispatch){              // and we need an async function so we can get the data from an api
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the arry of users
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
                //error.message gives the decsription of the error
            })
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST : return{
            ...state,
            loading : true,
        }
        case FETCH_USERS_SUCCESS : return {
            ...state,
            loading: false,
            users: action.payload
        }
        case FETCH_USERS_FAILURE : return {
            ...state,
            loading : false,
            users   : [],
            error   : action.error
            }

        default : return state

        }
    }

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())



/* ASYNC ACTIONS */
// * 1   - Asnyhcnronous API calls to fetch data from an end point and use that data in our application
// * 1.2 - we are going to fetch a list of users from an API end point and store into our redux store 
// * 1.5 - how will our state look like?
// * 1.8 - whar will our actions look like?
// *  2  - and how the reducer will work

/* async ACTION CREATORS */
// * 3 - What the THUNK middleware  brings to the table is the abillity for an ACTION CREATOR to RETURN a FUNCTION instead of an action OBJECT
// * 3.4   - An action creator returns an action
// * 3.8 - this function can also dispatch actions this is possible because it receives the dispatch method as its argument

// /* STATE  */ 
// * 4 The state object will contain 3 properties : state = {loading : true, data: [], error: '' }
// * 4.2 -  loading : will give us a spinner. 
// * 4.4 -  data = list of users.
// * 4.6 -  error = ''
// * 4.8 the initial state will be an empty array []

// /* ACTIONS  */  
// * 5 In our app we are going to have 3 actions
// * 5.4 - The first one will fetch the list of users : const FETCH_USERS_REQUEST 
// * 5.8 - the second and the third are dependend on the first one if the data was fetched successfuly we have
// and action with the type FETCH_USERS_SUCCESS = fetched successfuly if not we have a type FETCH_USERS_FAILURE 

// /* REDUCER function  */ 
// * 6   - if the ACTION type is FETCH_USERS_REQUEST we set the { loading : true } 
// * 6.4 - if the ACTION type is FETCH_USERS_SUCCESS we set the { loading : false} and we set the users {users: data (API) comming from the API}
// * 6.8 - if the ACTION type is FETCH_USERS_FAILURE we set the { loading : false} and we throw an error { error: error( from API)}

