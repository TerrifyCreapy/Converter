import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StarIcon from "@mui/icons-material/Star";


interface valute {
    ID: string,
    NumCode: string,
    CharCode: string,
    Nominal: number,
    Name: string,
    Value: number,
    Previous: number
}

interface IProps {
    valutes: valute[],
    setChanging: any,
    changing: boolean
}


const ExchangeRate = ({ valutes, setChanging, changing }: IProps) => {
    React.useEffect(() => {
        setChanging(false);
    }, [changing]);


    return (
        <div style={{ paddingBottom: "12.5%" }}>
            <TableContainer component={Paper} sx={{
                maxWidth: 1140,
                display: "flex",
                alignSelf: "center",
                margin: "0 auto",
                marginTop: "120px",
            }}>
                <Table sx={{ minWidth: 350, maxWidth: 1140 }} aria-label="simple table">
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
                    <TableBody>
                        {valutes.map((row) => (
                            <TableRow
                                key={row.CharCode}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={row.CharCode + "a"}
                                           component="th" scope="row">
                                    {row.CharCode} - {row.Name}
                                </TableCell>
                                <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={row.CharCode + "b"}
                                           align="center">{row.Nominal}</TableCell>
                                <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} key={row.CharCode + "c"}
                                           align="center">{row.Value}</TableCell>
                                <TableCell sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }} align="center"><StarIcon
                                    onClick={() => {
                                        if (localStorage.getItem(row.CharCode) === null)
                                            localStorage.setItem(row.CharCode, "1");
                                        else
                                            localStorage.removeItem(row.CharCode);
                                        setChanging(true);
                                    }} sx={{
                                    cursor: "pointer",
                                    color: Object.keys(localStorage).indexOf(row.CharCode) !== -1 ? "red" : "black",
                                }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ExchangeRate;