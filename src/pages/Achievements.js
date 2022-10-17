import Carousel from 'react-material-ui-carousel'
import { Box, ImageList } from '@mui/material';
import ImageListItemsFromFolder from '../components/ImageListItemsFromFolder';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Achievements = (props) => {
    const imageSx = {maxHeight: '50vh',};
    const theme = props.theme;
    var items = [
        {
            name: "IJJIF European Masters - 30/05/2022",
            description: "פיני חדידה זוכה במדליית זהב בקטגוריית מאסטרס מעל 100 קג",
            imageListFromFolder: 
            <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/30-05 jjif erupean masters')}
                handleImageClick={()=>{}}
                imageSx={imageSx}
            />
        },
        {
            name: "SJJIF Israel Open Championship - 22/07/2022",
            description: "סלווה אנטיפנקו ויעל אושר זוכים במדליות זהב בקטגוריות שלהם",
            imageListFromFolder: 
           <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/22-07 sjjif')}
                handleImageClick={()=>{}}
                imageSx={imageSx}
            />
        },
        {
            name: "TMS Israel Open Championship - 16/09/2022",
            description: "גבריאל ממן ותומר בקט זוכים במדליות ארד בקטגוריות שלהם",
            imageListFromFolder: 
            <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/16-09 TMS')}
                handleImageClick={()=>{}}
                imageSx={imageSx}
             />
        },
        {
            name: "IJJIL Israel Jiu-Jitsu League - 30/09/2022",
            description: "יוסף פרל זוכה במדליית זהב, דוד חודוש זוכה במדליית כסף ואלכס יאשקין זוכה במדליית ארד",
            imageListFromFolder: 
            <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/30-09 ijjl')}
                handleImageClick={()=>{}}
                imageSx={imageSx}
             />
        }
    ]
    
    return (
        <div style={{backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}}>
            <Carousel 
            sx={{height: '100vh', top: '10vh'}}
            navButtonsProps={{ style: {
                    backgroundColor: theme.palette.decorative.lightBrown,
                    color: theme.palette.decorative.darkGrey,                    
                }
            }}
            IndicatorIcon={<EmojiEventsIcon/>} 
            activeIndicatorIconButtonProps={{style: {backgroundColor: theme.palette.decorative.lightBrown}}}
            indicatorIconButtonProps={{style: {padding: '0.5%',}}}
            >
                {
                    items.map( (item, i) => <Item theme={theme} key={i} item={item} /> )
                }
            </Carousel>
        </div>      
    );
}

function Item(props){
    const theme = props.theme;
    return (
        <Box >
            <div style={{color: theme.typography.color, fontFamily: theme.typography.fontFamily}}>
                <h2 >{props.item.name}</h2>
                <p>{props.item.description}</p>
            </div>            
            <ImageList className="imglist" sx={{margin: 'auto', paddingBottom:20, }} gap={10}>
                {props.item.imageListFromFolder}
            </ImageList>            
        </Box>
    )
}

export default Achievements;

// https://www.npmjs.com/package/react-material-ui-carousel