import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './../style/ScheduleTabs.css'
import { ThemeProvider} from "@mui/material";

import TabPanel from './TabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ScheduleTabs = (props) => {
  const [value, setValue] = React.useState(2);
  const theme = props.theme;
  const items = props.items;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabsStyle = {
    fontFamily:theme.typography.fontFamily
    ,fontWeight: 700,
    color: theme.typography.color
}
  return (
    <div style={{backgroundColor: theme.palette.decorative.darkGrey, height: '100vh'}}>
        <ThemeProvider theme={theme}>
        <Box  className='scheduleBox' >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs textColor="secondary" indicatorColor='secondary' value={value} onChange={handleChange} centered variant='fullWidth'>
                <Tab sx={tabsStyle} label="mma + מזרון פתוח" {...a11yProps(0)} />
                <Tab sx={tabsStyle} label="אגרוף תאילנדי" {...a11yProps(1)} />
                <Tab sx={tabsStyle} label="ג'יוג'יטסו ברזילאי" {...a11yProps(2)} />
                <Tab sx={tabsStyle} label='לו"ז שבועי' {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel items={items} theme={theme} value={value} index={0}/>                
            <TabPanel items={items} theme={theme} value={value} index={1}/>
            <TabPanel items={items} theme={theme} value={value} index={2}/>
            <TabPanel items={items} theme={theme} value={value} index={3}/>

        </Box>
        </ThemeProvider>
    </div>    
  );
}

export default ScheduleTabs;