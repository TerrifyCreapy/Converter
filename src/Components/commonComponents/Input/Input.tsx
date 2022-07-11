import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";
import s from "../../../styles/Input.module.scss";
import { observer } from "mobx-react-lite";


interface Props {
    sideCode: number,
    calculateMoney: any,
    onChangeMoney: any,
    haveMoney: number,
    needMoney: number,
}

const Input = observer(({ sideCode, calculateMoney, onChangeMoney, haveMoney, needMoney }: Props) => {
    const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        //If empty string
        if (isNaN(parseFloat(event.target.value))) {
            onChangeMoney(0);
            return calculateMoney();
        }
        if (event.target.value.length > 10) return event.stopPropagation();

        onChangeMoney(parseFloat(event.target.value));
        return calculateMoney();
    };
    return (
        <div className={s.inputMoney}>
            <TextField
                id="outlined-multiline-flexible"
                value={sideCode === 0 ? haveMoney : needMoney}
                size={"medium"}
                placeholder={"Insert value here..."}
                sx={{ width: "85%", margin: "0px auto", heigth: "75px", marginLeft: "15px" }}
                variant="standard"
                InputProps={{ disableUnderline: true, style: { fontSize: 24, fontWeight: "bold" } }}
                onChange={handleInput}
            />
        </div>
    );
});

export default Input;