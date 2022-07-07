import React from 'react';
import CardVal from "../../commonComponents/Card/Card";
import data from "../../../store/data";
//@ts-ignore
import transform from "../../../Assets/transfer.png";
import {Container} from "@mui/material";
import {observer} from "mobx-react-lite";

const Converter = observer(() => {
    return (
        <Container sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginTop: "12.5%"}} maxWidth="md">
            <CardVal
                defaultValue={data.currentCurrency}
                currentMoney={data.currentCurrency}
                needMoney={data.needCurrency}
                sideCode={0}
            />
            <img onClick={() => data.swapData()} style={{width: "64px", height: "64px", cursor: "pointer"}} src={transform} alt="points"/>
            <CardVal
                defaultValue={data.needCurrency}
                currentMoney={data.needCurrency}
                needMoney={data.currentCurrency}
                sideCode={1}
            />
        </Container>
    );
});

export default Converter;