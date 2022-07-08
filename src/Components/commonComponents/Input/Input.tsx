import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";
import "./Input.css"
import data from "../../../store/data";
import {observer} from "mobx-react-lite";

interface Props {
    sideCode: number,
}

const Input = observer( ({ sideCode}:Props) => {
    function update(sideCode: number) {
        if(sideCode === 0) {
            data.calculateMoneyNeed();
        }
        else {
            data.calculateMoneyHave();
        }
    }
    const updateData = sideCode===0?data.onChangeCurrentMoney.bind(data):data.onChangeNeedMoney.bind(data);

    const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        //If empty string
        if(isNaN(parseFloat(event.target.value))) {
            updateData(0);
            return update(sideCode);
        }
        if(event.target.value.length > 10) return event.stopPropagation();

        updateData(parseFloat(event.target.value));
        return update(sideCode);


    }
    return (
        <div className="Input__money">
            <TextField
                id="outlined-multiline-flexible"
                value={sideCode===0?data.haveMoney:data.needMoney}
                size={"medium"}
                placeholder={"Insert value here..."}
                sx={{width: "85%", margin: "0px auto", heigth: '75px', marginLeft: "15px"}}
                variant="standard"
                InputProps={{disableUnderline: true, style: {fontSize: 24, fontWeight: "bold"}}}
                onChange={handleInput}
            />
        </div>
    );
});

export default Input;