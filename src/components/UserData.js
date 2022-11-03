import { Avatar, ThemeProvider, Typography,  } from "@mui/material";

const UserData = (props)=> {
    const theme = props.theme;
    const userData = props.userData;
    const userWrittenDat = (
        <div dir="rtl">
        {"תאריך תחילת מנוי : " + userData.lastSubscriptionDate}
        <br></br>
        {"וותק במועדון : " + userData.timeInAcademy + " חודשים" }
        </div>
    );
    return (
        <div>
            <Typography variant="h6" fontFamily={theme.typography.fontFamily}
            color={theme.typography.color} fontWeight={'600'} sx={{textDecoration: 'underline'}} dir={'rtl'}
            >{"היי " + userData.name + "!"}</Typography>
            <Avatar
                alt="profilePic"
                src={userData.profilePic}            
                sx={{height: '40vh', width: '40vh', margin: 'auto'}}
            />
            <img style={{maxWidth:'30%'}} src={require('./../extensions/images/profile/'+ userData.rank+'.png')} alt={"no rank"}></img>
            <ThemeProvider theme={props.theme}>
                <Typography
                    sx={{maxWidth: '80%', margin: 'auto',  color: theme.palette.decorative.lightBrown}}
                    variant='h6'
                    >                                    
                    {userWrittenDat}
                </Typography>
            </ThemeProvider>
        </div>
    );
}

export default UserData;