import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="sm" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "12.5%",
        }}>
            <Typography variant="h4" component="h4">
                Error 404. <br /> Can not found page :(
            </Typography>
            <Button variant="outlined" sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
                    onClick={() => navigate("/")}>Back to the home page</Button>
        </Container>
    );
};

export default NotFound;