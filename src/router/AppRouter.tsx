import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { RoutesName, routes } from "./routes";
import Header from "../components/Header/Header";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Header/>}>
                    {routes.map(({path, element}) => 
                        <Route path={path} element={element} key={path}/>
                    )}
                    <Route path="*" element={<Navigate to={RoutesName.MAIN} replace/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;