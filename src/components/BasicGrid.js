import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicCard from './BasicCard';
import BasicSelect from './BasicSelect';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import waveLogo from './wave.png';
import Button from '@mui/material/Button';

// import ColorChips from './ColorChips';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '0px'
}));

export default function BasicGrid() {

  const [data, setData] = useState([]);
  const [alertData, setAlertData] = useState("");

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setData(json)
      })
  });

  const selectOne = [
	  {text: 'CNC 1', value: 1},
	  {text: 'CNC 2', value: 2},
	  {text: 'CNC 3', value: 3},
]
  const selectTwo = [
	  {text: 'Unknown Anomally', value: 1},
	  {text: 'Unknown Anomally 2', value: 2},
	  {text: 'Unknown Anomally 3', value: 3},
]

  const selectThree = [
	  {text: 'Action 1', value: 1},
	  {text: 'Action Anomally 2', value: 2},
	  {text: 'Action Anomally 3', value: 3},
]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Item>
            <Grid item xs={1}>
              <BasicSelect data={{title: 'CNC Machine', select: selectOne}}></BasicSelect>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Stack style={{}}>
              Back
            </Stack>
            <Stack>
              6 Alerts
            </Stack>
            <Grid item xs={12}>
              {data.map(d => (
                <div onClick={()=> setAlertData({id: d.id, date: d.phone, source: d.company.name})}>
                  <BasicCard id={d.id} reason={d.name} date={d.phone} source={d.company.name} severity={d.address.city} />
                </div>
              ))}
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
            <Stack>
              Alert ID #{alertData.id}
            </Stack>
            <Stack>
              Detected at {alertData.date}
            </Stack>
            <hr></hr>

            <Grid container spacing={2}>

              <Grid item xs={6}>
                Anomaly Machine Input
              </Grid>
              <Grid item xs={6}>
                Normal Machine Input
              </Grid>
              <Grid item xs={6}>
              <audio src={'https://freesound.org/data/previews/627/627278_1648170-lq.mp3'} controls/>
              </Grid>
              <Grid item xs={6}>
              <audio src={'https://freesound.org/data/previews/627/627272_2061858-lq.mp3'} controls/>
              </Grid>
              <Grid item xs={12}>
                <img src={waveLogo} alt="wave"></img>
              </Grid>
              {/* <Grid item xs={6}>
                graph blue
              </Grid>
              <Grid item xs={6}>
                graph blue
              </Grid>
              <Grid item xs={6}>
                graph red
              </Grid>
              <Grid item xs={6}>
                graph red
              </Grid> */}
              <Grid item xs={12} >
                <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold'}}>
                Equipment
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                {alertData.source}
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold'}}>
                Suspected Reason
                </div>
                <Grid item xs={4}>
                <BasicSelect data={{title: 'Unknown Anomally', select: selectTwo}}></BasicSelect>
                </Grid>
                <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold'}}>
                Action Required
                </div>
                <Grid item xs={4}>
                <BasicSelect data={{title: 'Select Action', select: selectThree}}></BasicSelect>
                </Grid>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold'}}>
                  Comments
                </div>
                  <Stack>

                    <TextField
                      id="outlined-multiline-static"
                      label=""
                      multiline
                      rows={4}
                      defaultValue=""
                    />
                  </Stack>
                </Typography>
                <Stack>

                </Stack>
                <div style={{display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold'}}>
              <Button variant="contained">Update</Button>
                </div>
              </Grid>

            </Grid>

          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
