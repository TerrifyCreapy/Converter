import ExchangeRate from "../pages/ExchangeRate";
import ConvertPage from "../pages/ConvertPage";
import NotFoundPage from "../pages/NotFoundPage";


export const ConverterP = {
    name: "Converter page",
    path: "/",
    element: ConvertPage,
};

export const ExchangeP = {
    name: "Exchange page",
    path: "/Exchange",
    element: ExchangeRate,
};

export const NotFoundP = {
    name: "Not found page",
    path: "*",
    element: NotFoundPage,
};