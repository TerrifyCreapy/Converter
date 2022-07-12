import React from "react";
import Card from "@mui/material/Card";
import { FormControl, Select, MenuItem, Typography } from "@mui/material";
import Input from "../Input/Input";
import { observer } from "mobx-react-lite";

interface IProps {
    defaultValue: string,
    currentMoney: string,
    needMoney: string,
    sideCode: number,
    getCourse: () => any[],
    setCurrentCurrency: (currency: string) => void,
    setNeedCurrency: (currency: string) => void,
    currentNum: (current: string, need: string) => number,
    calculateMoney: () => void,
    onChangeMoney: () => void,
    needMoneyN: number,
    haveMoneyN: number
}

const CardVal: React.FC<IProps> = observer(({
                                                defaultValue,
                                                currentMoney,
                                                needMoney,
                                                sideCode,
                                                getCourse,
                                                setCurrentCurrency,
                                                setNeedCurrency,
                                                currentNum,
                                                calculateMoney,
                                                onChangeMoney,
                                                haveMoneyN,
                                                needMoneyN,
                                            }) => {
    const Valutes = getCourse();
    return (
        <>
            <Card sx={{ height: 350, width: 1 / 3, borderRadius: "20px", position: "relative" }} variant="outlined">
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
            </Card>
        </>
    );
});

export default CardVal;