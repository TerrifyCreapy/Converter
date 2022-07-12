import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import RowTable from "../../commonComponents/TableRow/RowTable";
import TableHeader from "../../commonComponents/TableHeader/TableHeader";


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


const ExchangeRate: React.FC<IProps> = ({ valutes, setChanging, changing }) => {
    React.useEffect(() => {
        setChanging(false);
    }, [changing, setChanging]);


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
                    <TableHeader/>
                    <TableBody>
                        {valutes.map((row) => (
                            <RowTable key={row.CharCode} {...row} setChanging={() => setChanging(true)}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ExchangeRate;