import React from "react";
import CardVal from "../../commonComponents/Card/Card";
import transform from "../../../Assets/transfer.png";
import { Container } from "@mui/material";
import { observer } from "mobx-react-lite";

interface IProps {
    currentCurrency: string,
    needCurrency: string,
    swapData: any,
    getCourse: any,
    setCurrentCurrency: any,
    setNeedCurrency: any,
    currentNum: any,
    calculateMoneyNeed: any,
    calculateMoneyHave: any,
    haveMoney: number,
    needMoney: number,
    onChangeMoneyHave: any,
    onChangeMoneyNeed: any
}

const Converter = observer(({
                                onChangeMoneyNeed,
                                onChangeMoneyHave,
                                currentCurrency,
                                needCurrency,
                                swapData,
                                getCourse,
                                setCurrentCurrency,
                                setNeedCurrency,
                                currentNum,
                                calculateMoneyNeed,
                                calculateMoneyHave,
                                haveMoney,
                                needMoney,
                            }: IProps) => {
    return (
        <Container sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "10.5%",
        }} maxWidth="md">
            <CardVal
                defaultValue={currentCurrency}
                currentMoney={currentCurrency}
                needMoney={needCurrency}
                sideCode={0}
                getCourse={getCourse}
                setCurrentCurrency={setCurrentCurrency}
                setNeedCurrency={setNeedCurrency}
                currentNum={currentNum}
                calculateMoney={calculateMoneyNeed}
                haveMoneyN={haveMoney}
                needMoneyN={needMoney}
                onChangeMoney={onChangeMoneyHave}
            />
            <img onClick={() => swapData()} style={{ width: "64px", height: "64px", cursor: "pointer" }} src={transform}
                 alt="points" />
            <CardVal
                defaultValue={needCurrency}
                currentMoney={needCurrency}
                needMoney={currentCurrency}
                sideCode={1}
                getCourse={getCourse}
                setCurrentCurrency={setCurrentCurrency}
                setNeedCurrency={setNeedCurrency}
                currentNum={currentNum}
                calculateMoney={calculateMoneyHave}
                haveMoneyN={haveMoney}
                needMoneyN={needMoney}
                onChangeMoney={onChangeMoneyNeed}
            />
        </Container>
    );
});

export default Converter;