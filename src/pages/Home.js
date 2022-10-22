// import firstVideo from './../extensions/video/first-vid.mp4';
import './../style/Home.css'
import secondVideo from './../extensions/video/second-vid.mp4';
import { ThemeProvider,  } from '@mui/material';
import MartialArtsCards from '../components/MartialArtsCards';
import About from './About';
import Schedule from './Schedule';
import Achievements from './Achievements';

const Home = (props) => {
    /* eslint-disable */
    const theme = props.theme;
    const midText = ".האקדמיה בראשות פיני חדידה מציעה לימוד של מגוון רחב של אומנויות לחימה, הקניית בטחון עצמי, כלים להגנה עצמית, וכמובן כושר ותנועתיות. האקדמיה ממוקמת בדרום הארץ ופועלת בעיר באר שבע"
    /* eslint-enable */    
    return (
        <div className='main'>
            <video src={secondVideo} autoPlay={true} muted loop/>                           
            <ThemeProvider theme={theme}>
                <div style={{backgroundColor:theme.palette.decorative.darkGrey}} className='below-video'>
                    <MartialArtsCards></MartialArtsCards>
                </div>                     
            </ThemeProvider>  
            <About theme={theme} ></About> 
            <Schedule theme={theme}></Schedule>   
            <Achievements theme={theme}></Achievements>      
        </div>
    );    
}

export default Home;