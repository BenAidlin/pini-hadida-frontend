
import ImageListItemsFromFolder from '../components/ImageListItemsFromFolder';
import Item from './../components/ImageWithTitleAndCaption'

const Achievements = (props) => {
    const imageSx = {marginBottom: '20vh', paddingTop: '-20%'};
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
        <div style={{paddingTop: '14vh',
            backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}}>
                {
                    items.map( (item, i) => 
                    <Item style={{}} theme={theme} key={i} item={item} /> )
                }
        </div>      
    );
}

export default Achievements;