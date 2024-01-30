import { ICat } from "../../models/ICat";

export class DBService {
    static save(cat: ICat) {
        const data = localStorage.getItem('cats') || '[]'
        const json: ICat[] = JSON.parse(data);
        json.push(cat);

        localStorage.setItem('cats', JSON.stringify(json))
    }

    static fetch() {
        const data = localStorage.getItem('cats') || '[]';
        const json: ICat[] = JSON.parse(data);
        return json
    }

    static delete(id: string) {
        const data = localStorage.getItem('cats') || '[]'
        const json: ICat[] = JSON.parse(data);
        const cats = json.filter(cat => cat.id !== id);

        localStorage.setItem('cats', JSON.stringify(cats))
    }
}