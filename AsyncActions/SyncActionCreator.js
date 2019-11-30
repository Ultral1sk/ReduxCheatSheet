/* ASYNC actions  scroll down for additional information*/
const redux = require('redux')
const createStore = redux.createStore

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

const store = createStore(reducer);
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsersSuccess())
store.dispatch(fetchUsersRequest())
store.dispatch(fetchUsersFailure())



/* SYNCHRONOUS ACTIONS */
// 2 - Previously we have been working with Synchronous Actions
// 2.2 - As soon as the action was dispatched(triggered), the state was immediately updated.
// 2.5 - If we dispatch the BUY_CAKE action, the numOfCakes was right way decremented by 1
// 2.8 - It was the same with BUY_ICRECREAM action as well.





