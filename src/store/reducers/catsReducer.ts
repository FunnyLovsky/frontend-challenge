import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICat } from "../../models/ICat";

interface CatsState {
    isLoading: boolean,
    error: null | string,
    cats: ICat[],
    page: number,
    limit: number,
}

const initialState: CatsState = {
    isLoading: true,
    error: null,
    cats: [],
    page: 0,
    limit: 20
}

const catsReducer = createSlice({
    name: "cats",
    initialState,
    reducers: {
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },

        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },

        addCats(state, action: PayloadAction<ICat[]>) {
            state.cats.push(...action.payload);
        },

        setIsLike(state, action: PayloadAction<{id: string, isLike: boolean}>) {
            state.cats = state.cats.map((cat) => 
                cat.id === action.payload.id ? {...cat, isLike: action.payload.isLike} : cat
            )
        },

        nextPage(state) {
            state.page += 1;
        }
    }
})


export const {addCats, setError, setIsLoading, setIsLike, nextPage} = catsReducer.actions
export default catsReducer.reducer