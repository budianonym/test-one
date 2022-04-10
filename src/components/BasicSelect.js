import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const selectOne = [
	  {text: 'CNC 1', value: 1},
	  {text: 'CNC 2', value: 2},
	  {text: 'CNC 3', value: 3},
]
console.log(props)
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.data.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={props.data.title}
          onChange={handleChange}
        >
			{props.data.select.map(d => (
				<MenuItem value={d.value}>{d.text}</MenuItem>
              ))}
        </Select>
      </FormControl>
    </Box>
  );
}
