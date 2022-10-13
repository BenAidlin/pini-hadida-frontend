import firstVideo from './../extensions/video/first-vid.mp4';
import './../style/Home.css'
import secondVideo from './../extensions/video/second-vid.mp4';
import { Typography } from '@mui/material';

import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import {Box} from '@mui/material';
import mma from './../extensions/images/mma.jpg'
import bjj from './../extensions/images/bjj.jpg'
import muaythai from './../extensions/images/muaythai.jpg'
import selfdefence from './../extensions/images/selfdefence.webp'
const Home = (props) => {
    const theme = props.theme;
    const mmaText = "כל מיני מילים יפות שאפשר להגיד על האומנות לחימה הזאת וכן כן וכן הלאה ועוד מילים יפות";
    const bjjText = "כל מיני מילים יפות שאפשר להגיד על האומנות לחימה הזאת וכן כן וכן הלאה ועוד מילים יפות";
    const muaythaiText = "כל מיני מילים יפות שאפשר להגיד על האומנות לחימה הזאת וכן כן וכן הלאה ועוד מילים יפות";
    const selfdefenceText = "כל מיני מילים יפות שאפשר להגיד על האומנות לחימה הזאת וכן כן וכן הלאה ועוד מילים יפות";
    const midText = ".האקדמיה בראשות פיני חדידה מציעה לימוד של מגוון רחב של אומנויות לחימה, הקניית בטחון עצמי, כלים להגנה עצמית, וכמובן כושר ותנועתיות. האקדמיה ממוקמת בדרום הארץ ופועלת בעיר באר שבע"
    const bjjCard = <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={bjj}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            ג'יוג'יטסו ברזילאי
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {bjjText}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
    const mmaCard =  <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={mma}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            MMA
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {mmaText}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
    const muaythaiCard = <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={muaythai}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                אגרוף תאילנדי
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {muaythaiText}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
    const selfdefenceCard = <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={selfdefence}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    הגנה עצמית
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {selfdefenceText}
                                </Typography>
                                </CardContent>
                            </CardActionArea>                   
    return (
        <div className='main'>
            <video src={secondVideo} autoPlay={true} muted loop/>   
            <div className='below-video'>
                {/*martial arts for big display */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="center">                
                    <Card sx={{ maxWidth: '25%' }}>
                        {bjjCard}
                    </Card>
                    <Card sx={{ maxWidth: '25%' }}>
                        {mmaCard}
                    </Card>
                    <Card sx={{ maxWidth: '25%' }}>
                        {muaythaiCard}
                    </Card>
                    <Card sx={{ maxWidth: '25%' }}>
                        {selfdefenceCard}
                    </Card>
                </Box>
                {/*martial arts for small display */}
                <Box sx={{ flexDirection: 'column', flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent="center">                
                    <Card sx={{ maxWidth: '100%' }}>
                        {bjjCard}
                    </Card>
                    <Card sx={{ maxWidth: '100%' }}>
                        {mmaCard}
                    </Card>
                    <Card sx={{ maxWidth: '100%' }}>
                        {muaythaiCard}                        
                    </Card>
                    <Card sx={{ maxWidth: '100%' }}>
                        {selfdefenceCard}
                    </Card>
                </Box>
            </div>                     
        </div>
    );    
}

export default Home;