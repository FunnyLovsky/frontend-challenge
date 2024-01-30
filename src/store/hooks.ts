import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".";
import { bindActionCreators } from "@reduxjs/toolkit";
import { catsActionCreators } from "./reducers/actionCreators";


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(catsActionCreators, dispatch)
}