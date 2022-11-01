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
    const mmaText = "כל מיני מילים יפות שאפשר להגיד על האומנות לחימה הזאת וכן כן וכן הלאה ועוד מילים יפות";
    const bjjText = "כל מיני מילים יפות שאפשר להגיד על האומנות לחימה הזאת וכן כן וכן הלאה ועוד מילים יפות";
    const muaythaiText = "כל מיני מילים יפות שאפשר להגיד על האומנות לחימה הזאת וכן כן וכן הלאה ועוד מילים יפות";
    const selfdefenceText = "כל מיני מילים יפות שאפשר להגיד על האומנות לחימה הזאת וכן כן וכן הלאה ועוד מילים יפות";
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
                        <Typography variant="body2" color="text.secondary">
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
                        <Typography variant="body2" color="text.secondary">
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
                            <Typography variant="body2" color="text.secondary">
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
                                <Typography variant="body2" color="text.secondary">
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