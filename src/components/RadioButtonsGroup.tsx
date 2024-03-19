import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

export default function RowRadioButtonsGroup() {
  return (
    <table className='table-radio' style={{marginLeft:50,marginTop:30}}>
      <tr>
        <td>
    <FormControl >
      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginBottom:5,marginLeft:5}}>Rate this Products</FormLabel>
      <hr />
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="1" />
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="3" control={<Radio />} label="3" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
        <FormControlLabel value="5" control={<Radio />} label="5" />
        <Button className='MyButton' sx={{marginTop:0.5}}>submit</Button>
      </RadioGroup>
        
      </FormControl>
      </td>
      </tr>
      </table>

  );
}