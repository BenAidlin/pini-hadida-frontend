import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import {Box} from '@mui/material';
import mma from './../extensions/images/mma.jpg'
import bjj from './../extensions/images/bjj.jpg'
import muaythai from './../extensions/images/muaythai.jpg'
import selfdefence from './../extensions/images/selfdefence.webp'

const MartialArtsCards = (props) => {
    /* eslint-disable */
    const theme = props.theme;
    /* eslint-enable */
    const mmaText = "לחימה משולבת. ספורט הלחימה המתתפתח והגדול בעולם, משלב מספר סגנונות לחימה בינהם אגרוף קלאסי, אגרוף תאילנדי, ג'יוג'יטסו ברזילאי והיאבקות.";
    const bjjText = "אומנות לחימה המגיעה מברזיל, שם פיתחה אותה משפחת גרייסי. מקורה בג'יוג'יטסו היפני ובג'ודו. אומנות לחימה זו עושה שימוש רב בהפלות, בריחים ובנעילות, וכן במנוף כדי להשיג יתרון על היריב.";
    const muaythaiText = "אומנות שמונת האיברים מתאילנד, עושה שימוש באגרופים, בעיטות, ברכיים וכן מרפקים. אגרוף תאילנדי הוא הספורט הלאומי של תאילנד.";
    const selfdefenceText = "קרב מגע היא תורת לחימה ישראלית המושתתת על הגנה עצמית. אומנות לחימה זו באה לעזור בהגנה עצמית בלבד, ואין לה היבטים של ספורט תחרותי.";
    const bjjCard = <CardActionArea>
                        <CardMedia  sx={{cursor: 'auto'}}
                        component="img"
                        height="140"
                        image={bjj}
                        alt="green iguana"
                        />
                        <CardContent sx={{cursor: 'auto'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            ג'יוג'יטסו ברזילאי
                        </Typography>
                        <Typography variant="body2" color="text.secondary" dir='rtl'>
                            {bjjText}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
    const mmaCard =  <CardActionArea>
                        <CardMedia sx={{cursor: 'auto'}}
                        component="img"
                        height="140"
                        image={mma}
                        alt="green iguana"
                        />
                        <CardContent sx={{cursor: 'auto'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            MMA
                        </Typography>
                        <Typography variant="body2" color="text.secondary" dir='rtl'>
                            {mmaText}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
    const muaythaiCard = <CardActionArea >
                            <CardMedia sx={{cursor: 'auto'}}
                            component="img"
                            height="140"
                            image={muaythai}
                            alt="green iguana"
                            />
                            <CardContent sx={{cursor: 'auto'}}>
                            <Typography gutterBottom variant="h5" component="div">
                                אגרוף תאילנדי
                            </Typography>
                            <Typography variant="body2" color="text.secondary" dir='rtl'>
                                {muaythaiText}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
    const selfdefenceCard = <CardActionArea >
                                <CardMedia sx={{cursor: 'auto'}}
                                component="img"
                                height="140"
                                image={selfdefence}
                                alt="green iguana"
                                />
                                <CardContent sx={{cursor: 'auto'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    הגנה עצמית
                                </Typography>
                                <Typography variant="body2" color="text.secondary" dir='rtl'>
                                    {selfdefenceText}
                                </Typography>
                                </CardContent>
                            </CardActionArea>                   
    return (
        <div>
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
    )
};
export default MartialArtsCards;