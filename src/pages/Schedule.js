import * as React from 'react';

import ScheduleTabs from './../components/ScheduleTabs';

let items = {
    2: [["יום ראשון", "20:00 - 22:00"],["יום שלישי", "20:00 - 22:00"],["יום חמישי", "20:00 - 22:00"]],
    1: [["יום שני", "19:00 - 21:00"],["יום רביעי", "19:00 - 21:00"]],
    0: [["יום שישי", "14:00 - 16:00"]]
}

const Schedule = (props) => {

  return (
    <div className='schedule'>
        <ScheduleTabs theme={props.theme} items={items}></ScheduleTabs>
    </div>    
  );
}

export default Schedule;