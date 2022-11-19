import { Avatar, ThemeProvider, Typography,  } from "@mui/material";
import { format } from "date-fns";

const UserData = (props)=> {
    const theme = props.theme;
    const userData = props.userData;
    console.log(userData);
    const userWrittenDat = userData.lastSubscriptionDate != null &&  userData.joinDate != null ? (
        <div dir="rtl">
        {"תאריך תחילת מנוי : " + format(new Date(userData.lastSubscriptionDate), 'dd/MM/yyyy')}
        <br></br>
        {"הצטרפות למועדון : " + format(new Date(userData.joinDate), 'dd/MM/yyyy') }
        </div>
    ) : '';
    return (
        <div>
            <Typography variant="h6" fontFamily={theme.typography.fontFamily}
            color={theme.typography.color} fontWeight={'600'} sx={{textDecoration: 'underline'}} dir={'rtl'}
            >{userData.name}</Typography>
            <Avatar
                alt="profilePic"
                src={userData.profilePic}            
                sx={{height: '25vh', width: '25vh', margin: 'auto'}}
            />
            {
                userData.rank != null ?
                <img style={{maxWidth:'30%'}} src={require('./../extensions/images/profile/'+ userData.rank+'.png')} alt={"no rank"}></img>
                : ""                
            }
            
            <ThemeProvider theme={props.theme}>
                <Typography
                    sx={{maxWidth: '80%', margin: 'auto',  color: theme.palette.decorative.lightBrown}}
                    variant='h6'
                    >   
                    {
                    userData.inUsers ?                                 
                    userWrittenDat
                    :
                    ""
                    }
                </Typography>
            </ThemeProvider>
        </div>
    );
}

export default UserData;