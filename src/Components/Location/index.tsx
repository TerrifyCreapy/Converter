import React from "react";
import { Typography } from "@mui/material";

interface IProps {
    location: string,
}

const Location:React.FC<IProps> = ({location}) => {
    return (
        <>
            <Typography sx={{position: "absolute", left: "10px", top: "80px", fontSize: {xs: "12px", sm: "14px", md:"16px", lg: "18px"}, textDecoration: "underline"}} variant="h6" component="h6">
                Location - {location}
            </Typography>
        </>
    );
};

export default Location;