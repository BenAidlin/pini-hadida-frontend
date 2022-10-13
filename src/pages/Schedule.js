import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import './../style/Schedule.css'

let items = {
    2: {'hours': [["יום ראשון", "20:00 - 22:00"],["יום שלישי", "20:00 - 22:00"],["יום חמישי", "20:00 - 22:00"]],
        'color': 'MintCream'},
    1: {'hours': [["יום שני", "19:00 - 21:00"],["יום רביעי", "19:00 - 21:00"]],
        'color': 'MintCream'},
    0: {'hours': [["יום שישי", "14:00 - 16:00"]],
        'color': 'MintCream'},
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value===index ? (items[index]['hours'].map(t => 
        <Box className='classBox' sx={{ display: 'flex',        
        '& > :not(style)': {
          m: 'auto',
          mb: '2%',
          mt: '2%',
          width: '60%',
          height: 128,
        }, }}>
            <Paper sx={{backgroundColor: items[index]['color']}} className='classPaper' elevation={12}>
                <Typography variant='h6' sx={{
                    fontFamily:"unset"
                    ,fontWeight: 400,                    
                }}>{t[0]}</Typography>
                <Typography sx={{fontFamily:'cursive'}}>{t[1]}</Typography>
            </Paper>          
        </Box> 
      )) : ""}
    </div>
  );
}
const tabsStyle = {
    fontFamily:"unset"
    ,fontWeight: 700,
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Schedule = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{height:'100vh', backgroundColor: 'gray'}}>
        <Box  className='schedule' >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs  value={value} onChange={handleChange} centered variant='fullWidth'>
                <Tab sx={tabsStyle} label="mma + מזרון פתוח" {...a11yProps(0)} />
                <Tab sx={tabsStyle} label="אגרוף תאילנדי" {...a11yProps(1)} />
                <Tab sx={tabsStyle} label="ג'יוג'יטסו ברזילאי" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    </div>    
  );
}

export default Schedule;