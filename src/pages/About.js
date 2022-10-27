import { Avatar, ThemeProvider, Typography,  } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const About = (props) => {
    const theme = props.theme;
    const aboutText = 
        <p dir="rtl">
            בעל תואר שני בחינוך גופני, M.ed<br/>
            בוגר קורס מאמני ג'וג'יטסו בכירים <br/>
            בוגר קורס מאמני ג'וג'יטסו <br/>
            בוגר קורס מאמני MMA <br/>
            חגורה שחורה דן 3 בג'וג'יטסו ברזילאי <br/>
            מייסד ספורט הג'וג'יטסו הברזילאי באזור הדרום <br/>
            בעל האקדמיה הותיקה ביותר לג'וג'יטסו וMMA מזה 22 שנה 
            באזור הדרום <br/>
            מתחרה פעיל במשך 20 שנה ללא הפסקה בכול הארגונים  הבנלאומיים  ibjjf  jjif  naga uww  <br/>
        </p>;
    const bullets = [
        'אלוף ארופה לחגורות חומות מאסטר 2 ibjjf 2014',
        'אלוף עולם מסטר בגראפלינג גי ונוגי uww  2016',
        'מדליסט כסף אליפות ארופה מאסטר ibjjf 2018',
        'אלוף ארופה מאסטר jjif  2022'
    ];
    return (
        <div  style={{paddingTop: '14vh', minHeight: '86vh', paddingBottom: '3vh',
        backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}}>
            <Typography variant="h6" fontFamily={theme.typography.fontFamily}
                color={theme.typography.color} fontWeight={'600'} sx={{textDecoration: 'underline'}}
            >מאמן ראשי - פיני חדידה</Typography>
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
                
                {bullets.map((bullet, i) => 
                <div key={i} style={{margin:'auto', display:'inline-block'}}>
                    <Typography dir='rtl'
                        sx={{maxWidth: '80%', margin: 'auto', marginTop: '5vh', color: theme.palette.decorative.lightBrown}}>
                        {bullet}
                    </Typography> 
                    <CheckCircleIcon/>                                
                </div>
                )}
                
                
            </ThemeProvider>                               
        </div>
    );    
}

export default About;