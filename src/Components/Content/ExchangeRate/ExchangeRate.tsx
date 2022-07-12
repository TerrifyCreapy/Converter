import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "../../commonComponents/TableHeader/TableHeader";
import { Rate } from "../../../interfaces/common/IRates";
import TableBodyComponent from "../../commonComponents/TableBody/TableBody";

interface IProps {
    valutes: Rate[],
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
                    <TableBodyComponent valutes={valutes} setChanging={setChanging}/>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ExchangeRate;