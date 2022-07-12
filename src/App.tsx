import React from "react";
import routes from "./Routes/Routes";
import "./styles/App.scss";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router";
import useStore from "./hooks/useStore";



const App = () => {
    const data = useStore();

    localStorage.setItem("favourites", "");

    React.useEffect(() => {
        data.fetchCourse();
    }, [data]);

    return (
        <div className="App">
            <Header />
            <Routes>
                {routes.map(r => <Route key={r.name} path={r.path} element={r.element}/>)}
            </Routes>

        </div>
    );
};

export default App;
