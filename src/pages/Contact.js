import locationImg from './../extensions/images/Contact/location.png'
import { ThemeProvider,Typography,  } from '@mui/material';
//import {Box,TextField} from  '@mui/material';
const Contact = (props) => {
    const theme = props.theme;
    const contactText = 
        <p dir="rtl">
            האקדמיה ממוקמת ברחוב הגאולים 36, באר שבע<br/>
            ליצירת קשר, ולתיאום אימון ניסיון, ניתן לפנות למספר <a style={{color: theme.palette.decorative.lightBrown}} href='tel:0526446744'>052-644-6744</a> <br/>
        </p>;
    
    return (
        <div style={{paddingTop: '10vh', paddingBottom: '10vh',
        backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}}         
        >
            <div>
                <ThemeProvider theme={props.theme}>
                    <Typography
                    sx={{maxWidth: '80%', margin: 'auto', marginTop: '1vh', color: theme.palette.decorative.lightBrown}}
                    variant='h6'
                    >
                        {contactText}
                    </Typography>                                
                </ThemeProvider> 
            </div>
            <div style={{maxWidth:'80%' ,margin: 'auto' }}>
                <a href="https://www.google.com/maps/place/Hage'ulim+St+36,+Beersheba/@31.2478825,34.805854,17z/data=!4m6!3m5!1s0x150266460b7566b9:0xd65711f9b9069877!8m2!3d31.2476605!4d34.806007!16s%2Fg%2F11hdjsp8v9" target={"_blank"} rel="noreferrer">
                    <img src={locationImg} alt={''}></img>
                </a>
            </div>
            {/* <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div style={{width:'100%' , marginTop: '1vh'}}>     
                    <ThemeProvider theme={theme}>
                        <Typography
                        sx={{maxWidth: '80%', margin: 'auto', marginTop: '1vh', color: theme.palette.decorative.lightBrown}}
                        variant='h6' dir={'rtl'}
                        >
                            לפנייה, <br></br> הכנס שם:
                        </Typography>               
                    
                        <TextField dir='rtl'
                        id="tb1"  color={'secondary'}  inputProps={{style:{color: theme.palette.secondary.main}}} 
                        variant={'filled'} placeholder={"שם הפונה..."}                                              
                        />         
                        <Typography
                        sx={{maxWidth: '80%', margin: 'auto', marginTop: '1vh', color: theme.palette.decorative.lightBrown}}
                        variant='h6' dir={'rtl'}
                        >
                           הכנס טקסט חופשי:
                        </Typography>               
                    
                        <TextField dir='rtl'
                        id="tb2"  color={'secondary'}  inputProps={{style:{color: theme.palette.secondary.main}}} fullWidth={true}
                        variant={'filled'}   placeholder={"כתוב כאן את מה שברצונך לשאול..."} rows={3} multiline
                        />                 
                    </ThemeProvider>   
                </div>
            </Box> */}
        </div>
    );
}
export default Contact;