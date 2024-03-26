import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { 
    persistReducer, 
    persistStore, 
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER
} from 'redux-persist'
import { userReducer } from "./reducers/userReducer.js"

const reducers = combineReducers({
    [userReducer.name]: userReducer.reducer
})

const persistConfig = {
    key: "root",
    version: 1,
    storage 
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)