import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'


import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer
})

const persistConfig = {
  key: 'root',
  storage,
   blacklist: ['authenticated']
}
 
const persistedReducer = persistReducer(persistConfig, reducers)



  export let store =  createStore(persistedReducer, initialState, compose(
					    applyMiddleware(...middleware),  
					    //window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
					    ))

 export let persistor = persistStore(store)

 


