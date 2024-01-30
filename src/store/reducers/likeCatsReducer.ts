import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICat } from "../../models/ICat";

interface CatsState {
    isLikeLoading: boolean,
    fetched: boolean
    likeError: null | string,
    likeCats: ICat[],
}

const initialState: CatsState = {
    isLikeLoading: false,
    likeError: null,
    likeCats: [],
    fetched: false
}

const likeCatsReducer = createSlice({
    name: "likeCats",
    initialState,
    reducers: {
        setLikeError(state, action: PayloadAction<string | null>) {
            state.likeError = action.payload;
        },

        setIsLikeLoading(state, action: PayloadAction<boolean>) {
            state.isLikeLoading = action.payload;
        },

        addLikeCat(state, action: PayloadAction<ICat[]>) {
            state.likeCats.push(...action.payload);
        },

        cancelLikeCat(state, action: PayloadAction<string>) {
            state.likeCats = state.likeCats.filter(cat => cat.id !== action.payload);
        },

        setFetched(state, action: PayloadAction<boolean>) {
            state.fetched = action.payload
        }
    }
})


export const { addLikeCat, cancelLikeCat, setIsLikeLoading, setLikeError, setFetched} = likeCatsReducer.actions
export default likeCatsReducer.reducer