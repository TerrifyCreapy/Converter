import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "mobx-react";

const AppStore = new store();
export const StoreContext = React.createContext<store>(AppStore);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <StoreContext.Provider value={AppStore}>
                    <App />
                </StoreContext.Provider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
