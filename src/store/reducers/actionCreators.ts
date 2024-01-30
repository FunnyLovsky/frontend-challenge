import { AppDispatch, RootState } from ".."
import { ICat } from "../../models/ICat";
import { CatsService } from "../api/CatsService";
import { DBService } from "../api/DBService";
import { addCats, nextPage, setIsLike, setIsLoading } from "./catsReducer"
import { setIsLikeLoading, cancelLikeCat, addLikeCat, setFetched } from './likeCatsReducer'

const fetchCats = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { page, limit } = getState().catsReducer;
    dispatch(setIsLoading(true));
    const response = await CatsService.fetchCats(page, limit);
    dispatch(addCats(response!));
    dispatch(setIsLoading(false))
}

const infFetchCats = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(nextPage());
    const { page, limit } = getState().catsReducer;
    console.log('fetch page', page)
    const response = await CatsService.fetchCats(page, limit);
    dispatch(addCats(response!));
}

const fetchLikeCats = () => async (dispatch: AppDispatch) => {
    dispatch(setIsLikeLoading(true))
    const cats = await DBService.fetch()
    dispatch(addLikeCat(cats));
    dispatch(setIsLikeLoading(false));
    dispatch(setFetched(true))
}

const toLikeCat = (cat: ICat) => (dispatch: AppDispatch, getState: () => RootState) => {
    const likeCat = {...cat, isLike: true}
    dispatch(setIsLike({id: cat.id, isLike: true}))
    dispatch(addLikeCat([likeCat]));
    DBService.save(likeCat)
}

const disLikeCat = (id: string) => (dispatch: AppDispatch) => {
    dispatch(setIsLike({id, isLike: false}))
    dispatch(cancelLikeCat(id));
    DBService.delete(id)
}

export const catsActionCreators = {
    fetchCats,
    toLikeCat,
    disLikeCat,
    fetchLikeCats,
    infFetchCats
}