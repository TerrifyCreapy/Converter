import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./store/store"

const AppStore = new store();
export const StoreContext = React.createContext<store>(AppStore);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreContext.Provider value={AppStore}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>
    </React.StrictMode>
);
