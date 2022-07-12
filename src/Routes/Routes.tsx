import ExchangeRatePage from "../pages/ExchangeRatePage";
import ConvertPage from "../pages/ConvertPage";
import NotFoundPage from "../pages/NotFoundPage";


export const ConverterPage = {
    name: "Converter page",
    path: "/",
    Element: ConvertPage,
};

export const ExchangePage = {
    name: "Exchange page",
    path: "/Exchange",
    Element: ExchangeRatePage,
};

export const ErrorNotFoundPage = {
    name: "Not found page",
    path: "*",
    Element: NotFoundPage,
};