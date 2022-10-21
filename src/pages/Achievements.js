
import ImageListItemsFromFolder from '../components/ImageListItemsFromFolder';
import {  Box } from '@mui/material';

const Achievements = (props) => {
    const imageSx = {marginBottom: '20vh'};
    const theme = props.theme;
    var items = [
        {
            name: "IJJIF European Masters - 30/05/2022",
            description: "פיני חדידה זוכה במדליית זהב בקטגוריית מאסטרס מעל 100 קג",
            imageListFromFolder: 
            <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/30-05 jjif erupean masters')}
                imageSx={imageSx}
            />
        },
        {
            name: "TMS Israel Open Championship - 16/09/2022",
            description: "גבריאל ממן ותומר בקט זוכים במדליות ארד בקטגוריות שלהם",
            imageListFromFolder: 
            <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/16-09 TMS')}
                imageSx={imageSx}
             />
        },
        {
            name: "IJJIL Israel Jiu-Jitsu League - 30/09/2022",
            description: "יוסף פרל זוכה במדליית זהב, דוד חודוש זוכה במדליית כסף ואלכס יאשקין זוכה במדליית ארד",
            imageListFromFolder: 
            <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/30-09 ijjl')}
                imageSx={imageSx}
             />
        }
    ]
    
    return (
        <div style={{paddingTop: '14vh', minHeight: '86vh',
            backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}}>
                {
                    items.map( (item, i) => 
                        <Box sx={{}}>
                            <div style={{color: theme.typography.color, fontFamily: theme.typography.fontFamily}}>
                                <h2 >{item.name}</h2>
                                <p>{item.description}</p>
                            </div>                        
                            {item.imageListFromFolder}      
                        </Box>
                    )
                }
        </div>      
    );
}

export default Achievements;