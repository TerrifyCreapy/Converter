import React from 'react';
import {Container, Typography} from "@mui/material";
import data from "./store/data"
import CardVal from "./Components/commonComponents/Card/Card";
import {observer} from "mobx-react-lite";
//@ts-ignore
import transform from "./Assets/transfer.png";
//@ts-ignore
import logo from "./Assets/logo.svg";
import "./App.scss";



const App = observer(() => {
    React.useEffect(()=> {
        data.setCourse();
        data.setStateCode(2);
    }, [data.setCourse, data.setStateCode]);

  return (
    <div className="App">
        <Typography sx={{position: "absolute", top: "20px", left: "20", display: "flex", alignItems: "center", fontSize: 14}} variant="h4" component="h4">
            <img style={{width: "48px", height: "48px"}} src={logo} alt="logo"/> <span style={{display: "block", fontWeight: "bold", fontSize: 20, marginLeft: "16px", color: "#8EE4AF"}}>AlConverter</span>
        </Typography>
        <Container sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}} maxWidth="md">
            <CardVal
                     defaultValue={data.currentCurrency}
                     currentMoney={data.currentCurrency}
                     needMoney={data.needCurrency}
                     sideCode={0}
            />
            <img onClick={() => data.swapData()} style={{width: "64px", height: "64px", cursor: "pointer"}} src={transform} alt="points"/>
            <CardVal
                     defaultValue={data.needCurrency}
                     currentMoney={data.needCurrency}
                     needMoney={data.currentCurrency}
                     sideCode={1}
            />
        </Container>
    </div>
  );
});

export default App;
