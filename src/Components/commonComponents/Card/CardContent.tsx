import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import Input from "../Input/Input";
import { Rate } from "../../../interfaces/common/IRates";

interface IProps {
    Valutes: Rate[],
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
    haveMoneyN: number
}

const CardContent: React.FC<IProps> = ({
                                           Valutes,
                                           defaultValue,
                                           sideCode,
                                           calculateMoney,
                                           onChangeMoney,
                                           haveMoneyN,
                                           needMoneyN,
                                           needMoney,
                                           currentMoney,
                                           currentNum,
                                           setCurrentCurrency,
                                           setNeedCurrency,
                                       }) => {
    return (
        <>
            <FormControl fullWidth>
                <Select
                    sx={{ borderRadius: "20px 20px 3px 3px" }}
                    id="demo-simple-select"
                    value={Valutes.length ? defaultValue : ""}
                >
                    {Valutes.map(e => <MenuItem disabled={e.CharCode === currentMoney || e.CharCode === needMoney}
                                                onClick={() => sideCode === 0 ? setCurrentCurrency(e.CharCode) : setNeedCurrency(e.CharCode)}
                                                value={e.CharCode}
                                                key={e.CharCode}>{e.CharCode} - {e.Name}</MenuItem>)}
                </Select>
            </FormControl>
            <Input
                sideCode={sideCode}
                calculateMoney={calculateMoney}
                onChangeMoney={onChangeMoney}
                needMoney={needMoneyN}
                haveMoney={haveMoneyN}
            />
            <Typography
                sx={{ position: "relative", top: "180px", left: "12px", fontSize: { xs: 10, sm: 14, md: 18 } }}
                variant="h2" gutterBottom component="div">
                1 {currentMoney} = {currentNum(needMoney, currentMoney).toFixed(4)} {needMoney}
            </Typography>
        </>
    )
};

export default CardContent;