import { ICat } from "../../models/ICat";
import { API_KEY, URL_API } from "./utils/const";

export class CatsService {
    static async fetchCats(page: number, limit: number) {
        const response = await fetch(`${URL_API}?page=${page}&limit=${limit}&api_key=${API_KEY}`);

        if(response.ok) {
            const cats: ICat[] = await response.json()
            return cats.map(({url, id}) => ({id: id + Date.now().toString(16), url, isLike: false}))
        }
    }
}