import { Avatar, ThemeProvider, Typography,  } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const About = (props) => {
    const theme = props.theme;
    const aboutText = "כל מיני מילים שאפשר להגיד על פיני - מקים הג'יוג'יטסו הברזילאי בדרום, שנת הקמת המועדון וכו וכו ועוד כל מיני מילים שאפשר להגיד על המועדון ועל ההישגים של פיני אלוף אירופה וNAGA ואליפות עולם ועוד המשך של עוד מילים שבנוסף אפשר להגיד על פיני והמועדון.";
    const bullets = ["עוסק בגוגיטסו ברזילאי כ 18 שנה מוותיקי הספורט בארץ", "2014 אלוף ארופה חומות מאסטר ibjjf", "ב2016 זכה באליפות עולם לוותיקים של ארגון uww בגראפלינג", "ב2018 סגן אלוף ארופה שחורות מסטרס ibjjf", "ב2018 אלוף נאגה אנגליה מאסטרס "]
    return (
        <div  style={{paddingTop: '14vh', minHeight: '86vh',
        backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}}>
            <Avatar
                alt="Pini hadida"
                src={require("./../extensions/images/about/pinihadida-profile.jpg")}            
                sx={{height: '40vh', width: '40vh', margin: 'auto'}}
            >
            </Avatar>
            <ThemeProvider theme={props.theme}>
                <Typography 
                sx={{maxWidth: '80%', margin: 'auto', marginTop: '10vh', color: theme.palette.decorative.lightBrown}}
                variant='h6'
                >
                    {aboutText}
                </Typography>
                
                {bullets.map(bullet => 
                <div style={{margin:'auto', display:'inline-block'}}>
                    <Typography
                    sx={{maxWidth: '80%', margin: 'auto', marginTop: '5vh', color: theme.palette.decorative.lightBrown}}
                    >{bullet}</Typography> 
                    <CheckCircleIcon>
                        
                    </CheckCircleIcon>
                    
            
                </div>
                )}
                
                
            </ThemeProvider>                               
        </div>
    );    
}

export default About;