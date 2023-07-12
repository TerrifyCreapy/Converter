import React from "react";
import { StoreContext } from "../index";

const useStore = () => {
    const AppState = React.useContext(StoreContext);
    return AppState;
};

export default useStore;