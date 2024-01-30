import AllCats from "../pages/AllCats"
import LikeCats from "../pages/LikeCats"

interface IRoutes {
    path: string,
    element: React.ReactNode
}

export enum RoutesName {
    MAIN = '/',
    LIKE = '/like'
}

export const routes: IRoutes[] = [
    {
        path: RoutesName.MAIN,
        element: <AllCats/>
    },
    {
        path: RoutesName.LIKE,
        element: <LikeCats/>
    }
]