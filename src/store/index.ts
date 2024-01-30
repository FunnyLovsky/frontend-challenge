import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catsReducer from "./reducers/catsReducer";
import likeCatsReducer from "./reducers/likeCatsReducer";

const rootReducer = combineReducers({
    catsReducer,
    likeCatsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']