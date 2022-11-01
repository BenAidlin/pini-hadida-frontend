import * as React from 'react';
import ScheduleTabs from './../components/ScheduleTabs';
import {Typography} from "@mui/material";

let items = {
    2: {
      "חמישי": [
        {
          id: 1,
          name: "פיני חדידה",
          type: "custom",
          startTime: new Date("2018-02-23T20:00:00"),
          endTime: new Date("2018-02-23T22:00:00"),
        },
      ],
      "שלישי":[
        {
          id: 1,
          name: "פיני חדידה",
          type: "custom",
          startTime: new Date("2018-02-23T20:00:00"),
          endTime: new Date("2018-02-23T22:00:00"),
        },
      ],
      "ראשון": [
        {
          id: 1,
          name: "פיני חדידה",
          type: "custom",
          startTime: new Date("2018-02-23T20:00:00"),
          endTime: new Date("2018-02-23T22:00:00"),
        },
      ]
    },
    1: {
      "רביעי" : [
        {
          id: 1,
          name: "אריאל פיסחוב",
          type: "custom",
          startTime: new Date("2018-02-23T19:00:00"),
          endTime: new Date("2018-02-23T21:00:00"),
        },
      ],
      "שני" :[
        {
          id: 1,
          name: "איראל פיסחוב",
          type: "custom",
          startTime: new Date("2018-02-23T19:00:00"),
          endTime: new Date("2018-02-23T21:00:00"),
        },
      ]
    },
    0: {
      "שישי": [
        {
          id: 1,
          name: "MMA",
          type: "custom",
          startTime: new Date("2018-02-23T14:00:00"),
          endTime: new Date("2018-02-23T15:00:00"),
        },
        {
          id: 2,
          name: "מזרון פתוח",
          type: "custom",
          startTime: new Date("2018-02-23T15:00:00"),
          endTime: new Date("2018-02-23T16:00:00"),
        },
      ],
    }
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