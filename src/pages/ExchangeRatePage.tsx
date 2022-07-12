import React from "react";
import useStore from "../hooks/useStore";
import ExchangeRate from "../Components/Content/ExchangeRate/ExchangeRate";
import { observer } from "mobx-react-lite";

const ExchangePage = observer(() => {
    const data = useStore();
    const [changing, setChanging] = React.useState(false);
    return (
        <>
            <ExchangeRate valutes={data.getFavourites(localStorage)} setChanging={setChanging} changing={changing} />
        </>
    );
});

export default ExchangePage;