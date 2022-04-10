import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ColorChips from './ColorChips';
import Chip from '@mui/material/Chip';
// import { useState, useEffect } from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {

	// useEffect(() => {
		
	
	// 	// Update the document title using the browser API
	// 	fetch(
	// 	  "https://jsonplaceholder.typicode.com/users")
	// 			  .then((res) => res.json())
	// 			  .then((json) => {
	// 				  // this.setState({
	// 				  //     items: json,
	// 				  //     DataisLoaded: true
	// 				  // });
	// 				  console.log(json)
	// 			  })
	//   });

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <ColorChips id={props.id} severity={props.severity}/>
        </Typography>
		{/* <div>

		</div> */}
        <Typography variant="h5" component="div">
		{props.reason}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
		Detected at {props.date}
        </Typography>
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">{props.source}</Button>
      </CardActions>
    </Card>
  );
}
