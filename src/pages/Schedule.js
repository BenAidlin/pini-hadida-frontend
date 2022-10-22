import * as React from 'react';
import ScheduleTabs from './../components/ScheduleTabs';
import {Typography} from "@mui/material";
let items = {
    2: [["יום ראשון", "20:00 - 22:00"],["יום שלישי", "20:00 - 22:00"],["יום חמישי", "20:00 - 22:00"]],
    1: [["יום שני", "19:00 - 21:00"],["יום רביעי", "19:00 - 21:00"]],
    0: [["יום שישי", "14:00 - 16:00"]]
}

const Schedule = (props) => {  
  const theme = props.theme;
  return (
    <div className='schedule' style={{backgroundColor: props.theme.palette.decorative.darkGrey, overflowY:'hidden', height:'86vh', paddingTop: '14vh'}}>
        <Typography variant="h6" fontFamily={theme.typography.fontFamily}
          color={theme.typography.color} fontWeight={'600'} sx={{textDecoration: 'underline'}}
        >לוח אימונים</Typography>
        <ScheduleTabs className='scheduleTabs' theme={props.theme} items={items}></ScheduleTabs>
    </div>    
  );
}

export default Schedule;