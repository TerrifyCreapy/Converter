import React from 'react';
import {Container, Typography} from "@mui/material";
import data from "./store/data"
import CardVal from "./Components/commonComponents/Card/Card";
import {observer} from "mobx-react-lite";
//@ts-ignore
import transform from "./Assets/transfer.png";
//@ts-ignore
import logo from "./Assets/logo.svg";
import "./App.scss";
import Header from "./Components/Header/Header";
import Converter from "./Components/Content/Converter/Converter";
import {Route, Routes} from "react-router";
import ExchangeRate from "./Components/Content/ExchangeRate/ExchangeRate";



const App = observer(() => {
    React.useEffect(()=> {
        data.setCourse();
        data.setStateCode(2);
    }, [data.setCourse, data.setStateCode]);

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
