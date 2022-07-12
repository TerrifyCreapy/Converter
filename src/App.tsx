import React from "react";
import { ConverterPage, ExchangePage, ErrorNotFoundPage } from "./Routes/Routes";
import "./styles/App.scss";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router";
import useStore from "./hooks/useStore";


const App = () => {

    const data = useStore();
    React.useEffect(() => {
        data.fetchCourse();
    }, [data]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={ExchangePage.path} element={<ExchangePage.Element />} />
                <Route path={ConverterPage.path} element={<ConverterPage.Element />} />
                <Route path={ErrorNotFoundPage.path} element={<ErrorNotFoundPage.Element />} />
            </Routes>

        </div>
    );
};

export default App;
