import {
  Box,
  Button,
  Input,
  Paper,
  Grid,
  TextField,
  Typography,
  Stack
} from "@mui/material";
import { Add, Clear, Remove } from "@mui/icons-material";
import React, { useState } from "react";
import "./score.css";

function Score() {
  const [scoreSpieler1, setSpieler1Score] = useState(0);
  const [scoreSpieler1Field, setSpieler1ScoreField] = useState(0);
  const [scoreSpieler2, setSpieler2Score] = useState(0);
  const [scoreSpieler2Field, setSpieler2ScoreField] = useState(0);
  const [roundPoints, setRoundPoints] = useState([]);

  const updateScore = () => {
    setSpieler1Score(parseInt(scoreSpieler1Field) + parseInt(scoreSpieler1));
    setSpieler2Score(parseInt(scoreSpieler2Field) + parseInt(scoreSpieler2));
    setRoundPoints((prevPoints) => [
        ...prevPoints, {
            spieler1: parseInt(scoreSpieler1Field),
            spieler2: parseInt(scoreSpieler2Field),
        }
    ])
  };


  return (
    <Box m={2} pt={3} >
      <Grid container rowSpacing={2} justifyContent="center">
        {Object.keys(roundPoints).map((round, i) => (
          <>
            <Grid item xs={0} s={3} md={3} key={i + "ph1"}/>
            <Grid item xs={2} s={2} md={2} key={i + "label"}>
            <Typography sx={{ textAlign: "right", marginRight: 5}}>{i+1}te Runde</Typography>
            </Grid>
            <Grid item xs={5} s={2} md={2} key={i + "sp1"}>
              <Typography sx={{ borderLeft: 1, borderRight: 1, textAlign: "center" }}>{roundPoints[round].spieler1}</Typography>
            </Grid>
            <Grid item xs={5} s={2} md={2} key={i + "sp2"}>
              <Typography sx={{ textAlign: "center" }}>{roundPoints[round].spieler2}</Typography>
            </Grid>
            <Grid item xs={0} s={3} md={3} key={i + "ph2"}/>
          </>
        ))}

        <Grid item xs={0} s={3} md={3} />
        <Grid item xs={2} s={2} md={2} >
        <Typography noWrap sx={{ fontWeight: 600, paddingTop: 1, textAlign: "right", marginRight: 5 }}>Gesamtscore</Typography>
        </Grid>
        <Grid item xs={5} s={2} md={2}>
          <Typography sx={{ fontWeight: 600, paddingTop: 1, borderTop: 1, textAlign: "center" }}>{scoreSpieler1}</Typography>
        </Grid>
        <Grid item xs={5} s={2} md={2}>
          <Typography sx={{ fontWeight: 600, paddingTop: 1, borderTop: 1, textAlign: "center" }}>{scoreSpieler2}</Typography>
        </Grid>
        <Grid item xs={0} s={3} md={3} />
        <Grid marginTop={5} item xs={6} s={2} md={2}>
          <TextField
            sx={{input: {textAlign: "center"}}}       
            type="number"
            fullWidth
            onChange={(value) => {
              setSpieler1ScoreField(value.target.value);
            }}
            id="standard-basic"
            label="Spieler 1 Punkte"
            variant="standard"
          />
        </Grid>
        <Grid marginTop={5} item xs={6} s={2} md={2}>
          <TextField
            sx={{ textAlign: "center" }}
            type="number"
            fullWidth
            onChange={(value) => {
              setSpieler2ScoreField(value.target.value);
            }}
            id="standard-basic"
            label="Spieler 2 Punkte"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Typography align="center">
        <Button onClick={updateScore}>Runde eingeben</Button>
      </Typography>
    </Box>

    
  );
}

export default Score;
