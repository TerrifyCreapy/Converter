import React from "react";
import TableCell from "@mui/material/TableCell";
import StarIcon from "@mui/icons-material/Star";
import TableRow from "@mui/material/TableRow";

interface IProps {
    CharCode: string,
    Name: string,
    Nominal: number,
    Value: number
    setChanging: () => void,
}

const RowTable: React.FC<IProps> = ({ CharCode, Name, Nominal, Value, setChanging }) => {
    return (
        <TableRow
            key={CharCode}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
            <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={CharCode + "a"}
                       component="th" scope="row">
                {CharCode} - {Name}
            </TableCell>
            <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={CharCode + "b"}
                       align="center">{Nominal}
            </TableCell>
            <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={CharCode + "c"}
                       align="center">{Value}
            </TableCell>
            <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} align="center">
                <StarIcon
                    onClick={() => {
                        const favourites: string | null = localStorage.getItem("favourites");
                        if((favourites || "").indexOf(CharCode) ===-1) localStorage.setItem("favourites", favourites + CharCode + ",");
                        else localStorage.setItem("favourites", (favourites||"").replace(CharCode + ",", ""));

                        if (localStorage.getItem(CharCode) === null)
                            localStorage.setItem(CharCode, "1");
                        else
                            localStorage.removeItem(CharCode);
                        setChanging();
                    }} sx={{
                    cursor: "pointer",
                    color: Object.keys(localStorage).indexOf(CharCode) !== -1 ? "red" : "black",
                }} />
            </TableCell>
        </TableRow>
    );
};

export default RowTable;