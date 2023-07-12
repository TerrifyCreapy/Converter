import ExchangeRatePage from "../pages/ExchangeRatePage";
import ConvertPage from "../pages/ConvertPage";
import NotFoundPage from "../pages/NotFoundPage";
import { IRoutes } from "../interfaces/common/IRoutes";

const routes: IRoutes[] = [
    {
        name: "Converter page",
        path: "/",
        element: <ConvertPage/>,
    },
    {
        name: "Exchange page",
        path: "/Exchange",
        element: <ExchangeRatePage/>,
    },
    {
        name: "Not found page",
        path: "*",
        element: <NotFoundPage/>,
    }
];

export default routes;