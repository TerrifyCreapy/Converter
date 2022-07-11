import React from "react";
import { observer } from "mobx-react-lite";
import { ConverterP, ExchangeP, NotFoundP } from "./Routes/Routes";
import "./styles/App.scss";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router";
import useStore from "./hooks/useStore";


const App = observer(() => {

    const data = useStore();
    React.useEffect(() => {
        data.fetchCourse().then(response => data.setStateCode(2));
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={ExchangeP.path} element={<ExchangeP.element />} />
                <Route path={ConverterP.path} element={<ConverterP.element />} />
                <Route path={NotFoundP.path} element={<NotFoundP.element />} />
            </Routes>

        </div>
    );
});

export default App;
