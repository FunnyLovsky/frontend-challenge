import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICat } from "../../models/ICat";

interface CatsState {
    isLikeLoading: boolean,
    likeError: null | string,
    likeCats: ICat[],
}

const initialState: CatsState = {
    isLikeLoading: false,
    likeError: null,
    likeCats: [],
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
    }
})


export const { addLikeCat, cancelLikeCat, setIsLikeLoading, setLikeError} = likeCatsReducer.actions
export default likeCatsReducer.reducer