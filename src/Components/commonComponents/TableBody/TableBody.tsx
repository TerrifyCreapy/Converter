import React from "react";
import RowTable from "../TableRow/RowTable";
import { Rate } from "../../../interfaces/common/IRates";
import { TableBody } from "@mui/material";

interface IProps {
    valutes: Rate[],
    setChanging: any
}

const TableBodyComponent: React.FC<IProps> = ({valutes, setChanging}) => {
    return (
        <TableBody>
            {valutes.map((row) => (
                <RowTable key={row.CharCode} {...row} setChanging={() => setChanging(true)}/>
            ))}
        </TableBody>
    );
};

export default TableBodyComponent;