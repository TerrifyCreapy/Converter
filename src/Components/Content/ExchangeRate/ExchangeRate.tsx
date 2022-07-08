import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import data from "../../../store/data";
import {observer} from "mobx-react-lite";


const ExchangeRate = observer(() => {
    let valutes = data.getFavourites(localStorage);
    const [changing, setChanging] = React.useState(false);
    React.useEffect(()=> {
        setChanging(false)
    }, [changing]);


    return (
        <TableContainer component={Paper} sx={{maxWidth: 1140, display: "flex", alignSelf: "center", margin: "0 auto", marginTop: "120px"}}>
            <Table sx={{ minWidth: 650,maxWidth: 1140 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell key={"Rate"}>Rate</TableCell>
                        <TableCell key={"Nominal"} align="center">Nominal</TableCell>
                        <TableCell key={"Value"} align="center">Value (Rubbles)</TableCell>
                        <TableCell key={"Favourite"} align="center">Favourite</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {valutes.map((row) => (
                        <TableRow
                            key={row.CharCode}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell key={row.CharCode + "a"} component="th" scope="row">
                                {row.CharCode} - {row.Name}
                            </TableCell>
                            <TableCell key={row.CharCode + "b"} align="center">{row.Nominal}</TableCell>
                            <TableCell key={row.CharCode + "c"} align="center">{row.Value}</TableCell>
                            <TableCell align="center"><StarIcon onClick={() => {
                                if(localStorage.getItem(row.CharCode) === null)
                                    localStorage.setItem(row.CharCode, "1");
                                else
                                    localStorage.removeItem(row.CharCode);
                                setChanging(true);
                            }} sx={{cursor: "pointer", color: Object.keys(localStorage).indexOf(row.CharCode)!==-1?"red":"black",}}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

export default ExchangeRate;