import React from "react";
import CardVal from "../../commonComponents/Card/Card";
import transform from "../../../Assets/transfer.png";
import { Container } from "@mui/material";
import { Rate } from "../../../interfaces/common/IRates";

interface IProps {
    currentCurrency: string,
    needCurrency: string,
    swapData: any,
    setCurrentCurrency: any,
    setNeedCurrency: any,
    currentNum: any,
    calculateMoneyNeed: any,
    calculateMoneyHave: any,
    haveMoney: number,
    needMoney: number,
    onChangeMoneyHave: any,
    onChangeMoneyNeed: any,
    valutes: Rate[]
}

const Converter: React.FC<IProps> = ({
                                         onChangeMoneyNeed,
                                         onChangeMoneyHave,
                                         currentCurrency,
                                         needCurrency,
                                         swapData,
                                         setCurrentCurrency,
                                         setNeedCurrency,
                                         currentNum,
                                         calculateMoneyNeed,
                                         calculateMoneyHave,
                                         haveMoney,
                                         needMoney,
                                         valutes,
                                     }) => {
    return (
        <Container sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: { xs: "14.5%", sm: "13.5%", md: "10.5%" },
        }} maxWidth="md">
            <CardVal
                defaultValue={currentCurrency}
                currentMoney={currentCurrency}
                needMoney={needCurrency}
                sideCode={0}
                setCurrentCurrency={setCurrentCurrency}
                setNeedCurrency={setNeedCurrency}
                currentNum={currentNum}
                calculateMoney={calculateMoneyNeed}
                haveMoneyN={haveMoney}
                needMoneyN={needMoney}
                onChangeMoney={onChangeMoneyHave}
                valutes={valutes}
            />
            <img onClick={() => swapData()} style={{ width: "64px", height: "64px", cursor: "pointer" }} src={transform}
                 alt="points" />
            <CardVal
                defaultValue={needCurrency}
                currentMoney={needCurrency}
                needMoney={currentCurrency}
                sideCode={1}
                setCurrentCurrency={setCurrentCurrency}
                setNeedCurrency={setNeedCurrency}
                currentNum={currentNum}
                calculateMoney={calculateMoneyHave}
                haveMoneyN={haveMoney}
                needMoneyN={needMoney}
                onChangeMoney={onChangeMoneyNeed}
                valutes={valutes}
            />
        </Container>
    );
};

export default Converter;