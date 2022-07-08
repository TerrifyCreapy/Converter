import React from 'react';
import data from "./store/data"
import {observer} from "mobx-react-lite";
import "./App.scss";
import Header from "./Components/Header/Header";
import Converter from "./Components/Content/Converter/Converter";
import {Route, Routes} from "react-router";
import ExchangeRate from "./Components/Content/ExchangeRate/ExchangeRate";



const App = observer(() => {
    React.useEffect(()=> {
        data.fetchCourse();
        data.setStateCode(2);
    }, []);

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/Exchange"} element={<ExchangeRate/>}/>
            <Route path={"/"} element={<Converter/>}/>
            <Route path={"*"} element={<div>Error</div>}/>
        </Routes>

    </div>
  );
});

export default App;
