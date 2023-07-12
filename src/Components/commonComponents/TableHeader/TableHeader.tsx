import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={"Rate"}>Rate</TableCell>
                <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={"Nominal"}
                           align="center">Nominal</TableCell>
                <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={"Value"} align="center">Value
                    (Rubbles)</TableCell>
                <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={"Favourite"}
                           align="center">Favourite</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;