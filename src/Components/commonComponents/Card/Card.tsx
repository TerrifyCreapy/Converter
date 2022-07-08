import React from 'react';
import Card from '@mui/material/Card';
import {FormControl, Select, MenuItem, Typography} from "@mui/material";
import Input from "../Input/Input";
import data from "../../../store/data";
import {observer} from "mobx-react-lite";
interface Props {
    defaultValue: string,
    currentMoney: string,
    needMoney: string,
    sideCode: number,
}

const CardVal = observer(({ defaultValue, currentMoney, needMoney, sideCode}:Props) => {
    const Valutes = data.getCourse();

    return (
        <>
                <Card sx={{height: 350, width: 1/3, borderRadius: "20px", position: "relative"}} variant="outlined">
                    <FormControl fullWidth>
                        <Select
                            sx={{borderRadius: "20px 20px 3px 3px"}}
                            id="demo-simple-select"
                            value={Valutes.length?defaultValue:""}
                        >
                            {Valutes.map(e => <MenuItem disabled={e.CharCode===data.currentCurrency || e.CharCode===data.needCurrency} onClick={() => sideCode===0?data.setCurrentCurrency(e.CharCode):data.setNeedCurrency(e.CharCode)} value={e.CharCode} key={e.CharCode}>{e.CharCode} - {e.Name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Input sideCode={sideCode}/>
                    <Typography sx={{position: "relative", top: "180px", left: "12px", fontSize: 18}} variant="h2" gutterBottom component="div">
                        1 {currentMoney} = {data.currentNum(needMoney, currentMoney).toFixed(4)} {needMoney}
                    </Typography>
                </Card>
        </>
    );
});

export default CardVal;