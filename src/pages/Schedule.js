import * as React from 'react';
import ScheduleTabs from './../components/ScheduleTabs';
import {Typography} from "@mui/material";

let items = {
    2: {
      events:{
        "חמישי": [
          {
            id: 1,
            name: "ג'יוג'יטסו ברזילאי",
            type: "custom",
            startTime: new Date("2018-02-23T20:00:00"),
            endTime: new Date("2018-02-23T22:00:00"),
          },
        ],
        "שלישי":[
          {
            id: 1,
            name: "ג'יוג'יטסו ברזילאי",
            type: "custom",
            startTime: new Date("2018-02-23T20:00:00"),
            endTime: new Date("2018-02-23T22:00:00"),
          },
        ],
        "ראשון": [
          {
            id: 1,
            name: "ג'יוג'יטסו ברזילאי",
            type: "custom",
            startTime: new Date("2018-02-23T20:00:00"),
            endTime: new Date("2018-02-23T22:00:00"),
          },
        ]
      },
      startTime: 19,
      endTime: 23
    },
    1: {
      events:{
        "רביעי" : [
          {
            id: 1,
            name: "אגרוף תאילנדי",
            type: "custom",
            startTime: new Date("2018-02-23T19:00:00"),
            endTime: new Date("2018-02-23T21:00:00"),
          },
        ],
        "שני" :[
          {
            id: 1,
            name: "אגרוף תאילנדי",
            type: "custom",
            startTime: new Date("2018-02-23T19:00:00"),
            endTime: new Date("2018-02-23T21:00:00"),
          },
        ]
      },
      startTime: 18,
      endTime: 22
    },
    0: {
      events:{
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
      },
      startTime: 13,
      endTime: 17
    }
}
// combine all into another item entry
items[3] = {
  events : {...items[0].events, ...items[1].events, ...items[2].events},
  startTime: Math.min(items[0].startTime, items[1].startTime, items[2].startTime),
  endTime: Math.max(items[0].endTime, items[1].endTime, items[2].endTime)
};

const Schedule = (props) => {  
  const theme = props.theme;
  return (
    <div className='schedule' style={{backgroundColor: props.theme.palette.decorative.darkGrey, overflowY:'hidden', height:'86vh', paddingTop: '14vh'}}>
        <Typography variant="h6" fontFamily={theme.typography.fontFamily}
          color={theme.typography.color} fontWeight={'600'} sx={{textDecoration: 'underline'}}
        >לוח אימונים
        </Typography>
        <ScheduleTabs className='scheduleTabs' theme={props.theme} items={items}></ScheduleTabs>
    </div>    
  );
}

export default Schedule;