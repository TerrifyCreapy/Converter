import React from "react";
import Converter from "../Components/Content/Converter/Converter";
import useStore from "../hooks/useStore";
import { observer } from "mobx-react-lite";
import Location from "../Components/Location";

const ConvertPage = observer(() => {
    const data = useStore();
    return (
        <>
            <Location location={data.currentLocationCode}/>
            <Converter
                swapData={data.swapData.bind(data)}
                currentCurrency={data.currentCurrency}
                needCurrency={data.needCurrency}
                getCourse={data.getCourse.bind(data)}
                setCurrentCurrency={data.setCurrentCurrency.bind(data)}
                setNeedCurrency={data.setNeedCurrency.bind(data)}
                currentNum={data.currentNum.bind(data)}
                calculateMoneyHave={data.calculateMoneyHave.bind(data)}
                calculateMoneyNeed={data.calculateMoneyNeed.bind(data)}
                haveMoney={data.haveMoney}
                needMoney={data.needMoney}
                onChangeMoneyNeed={data.onChangeNeedMoney.bind(data)}
                onChangeMoneyHave={data.onChangeCurrentMoney.bind(data)}
            />
        </>
    );
});

export default ConvertPage;