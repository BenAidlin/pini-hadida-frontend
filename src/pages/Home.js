// import firstVideo from './../extensions/video/first-vid.mp4';
import './../style/Home.css'
import secondVideo from './../extensions/video/second-vid.mp4';
import { ThemeProvider,  } from '@mui/material';
import MartialArtsCards from '../components/MartialArtsCards';
import About from './About';
import Schedule from './Schedule';
import Achievements from './Achievements';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import Contact from './Contact';


const Home = (props) => {
    const theme = props.theme;
    const [homeObjects] = useState([
        {
            divId: "About",
            jsx: (
                <About theme={theme}></About> 
            ),
            ref: document.getElementById("About")
         },
         {
            divId: "Contact",
            jsx: (
                <Contact theme={theme}></Contact>   
            ),
            ref: document.getElementById("Schedule")
         },
         {
            divId: "Schedule",
            jsx: (
                <Schedule theme={theme}></Schedule>   
            ),
            ref: document.getElementById("Schedule")
         },


         {
            divId: "Achievements",
            jsx: (
                <Achievements theme={theme}></Achievements>      
            ),
            ref: document.getElementById("Achievements")
         }
    ]);
    const location = useLocation();
    const locationUpdate = useCallback(() => {
        for(let ho of homeObjects){
            if(location.pathname.endsWith(ho.divId)){
                document.getElementById(ho.divId).scrollIntoView({behavior: 'smooth'});
                return;
            }
        }
        document.getElementById('mainHomeDiv').scrollIntoView({behavior: 'smooth'});                
    }, [location, homeObjects]);
    useEffect(()=>{
        // every time location updates        
        locationUpdate();
    }, [location, locationUpdate]);
    useEffect(()=>{
        // one time, when entering the component, wait 800 ms and update
        setTimeout(() => {locationUpdate();}, 800)
    }, [locationUpdate])

    return (
        <div id='mainHomeDiv' className='main' >
            <video src={secondVideo} autoPlay={true} muted loop/>                           
            <ThemeProvider theme={theme}>
                <div style={{backgroundColor:theme.palette.decorative.darkGrey}} className='below-video'>
                    <MartialArtsCards></MartialArtsCards>
                </div>                     
            </ThemeProvider>  
            {homeObjects.map(ho => (
                <div key={ho.divId} id={ho.divId} style={{backgroundColor: theme.palette.decorative.darkGrey}}>
                    {ho.jsx}
                    <hr width="75%"  size="50px" style={{marginTop: '0', marginBottom: '0'}}/>
                </div>
            ))}
        </div>        
    );    
}

export default Home;