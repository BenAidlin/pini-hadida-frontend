import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import './../style/ScheduleTabs.css'
import { ThemeProvider} from "@mui/material";

function TabPanel(props) {
  const {items, theme, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value===index ? (items[index].map((t, i) => 
        <Box key={i} className='classBox' sx={{ display: 'flex',        
        '& > :not(style)': {
          m: 'auto',
          mb: '2vh',
          mt: '2vh',
          width: '60vh',
          height: '18vh',
        }, }}>
            <Paper sx={{backgroundColor: theme.palette.decorative.lightBrown}} className='classPaper' elevation={12}>
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
                </Tabs>
            </Box>
            <TabPanel items={items} theme={theme} value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel items={items} theme={theme} value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel items={items} theme={theme} value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
        </ThemeProvider>
    </div>    
  );
}

export default ScheduleTabs;