import React from "react";
import Card from "@mui/material/Card";
import MyLoader from "../../Loaders/CardLoader";
import CardContent from "./CardContent";
import { Rate } from "../../../interfaces/common/IRates";

interface IProps {
    defaultValue: string,
    currentMoney: string,
    needMoney: string,
    sideCode: number,
    setCurrentCurrency: (currency: string) => void,
    setNeedCurrency: (currency: string) => void,
    currentNum: (current: string, need: string) => number,
    calculateMoney: () => void,
    onChangeMoney: () => void,
    needMoneyN: number,
    haveMoneyN: number,
    valutes: Rate[]
}

const CardVal: React.FC<IProps> = ({
                                       defaultValue,
                                       currentMoney,
                                       needMoney,
                                       sideCode,
                                       setCurrentCurrency,
                                       setNeedCurrency,
                                       currentNum,
                                       calculateMoney,
                                       onChangeMoney,
                                       haveMoneyN,
                                       needMoneyN,
                                       valutes,
                                   }) => {
    return (
        <>
            <Card sx={{ height: 350, width: 1 / 3, borderRadius: "20px", position: "relative", paddingBottom: "15px" }}
                  variant="outlined">
                {valutes.length === 0 ? <MyLoader /> : <CardContent Valutes={valutes}
                                                                    defaultValue={defaultValue}
                                                                    currentNum={currentNum}
                                                                    currentMoney={currentMoney}
                                                                    needMoney={needMoney}
                                                                    sideCode={sideCode}
                                                                    setCurrentCurrency={setCurrentCurrency}
                                                                    setNeedCurrency={setNeedCurrency}
                                                                    calculateMoney={calculateMoney}
                                                                    onChangeMoney={onChangeMoney}
                                                                    haveMoneyN={haveMoneyN}
                                                                    needMoneyN={needMoneyN}
                />}
            </Card>
        </>
    );
};

export default CardVal;