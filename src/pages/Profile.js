import { Box, Button, ThemeProvider, Typography, Dialog } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import AdminStudentManager from "../components/AdminStudentManager";
import UserData from "../components/UserData";
import Slide from '@mui/material/Slide';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Profile = (props) => {
    let userData = props.userData;
    const theme = props.theme;
    const navigate = useNavigate();
    const [manageStudents, setManageStudents] = useState(false);
    let isLoggedIn = userData !== "" && userData !== null ? true : false;        
    if(!isLoggedIn){
        navigate(process.env.REACT_APP_route_prefix);
    }
    const openAdminModal = async () => {
        setManageStudents(true);        
    }
    
    return (
        <div style={{paddingTop: '14vh', minHeight: '86vh', backgroundColor: theme.palette.decorative.darkGrey}} >
            {
                isLoggedIn ?
                <div>
                    {
                        userData == null ? 
                        <div>
                        <h1>...</h1>
                        </div>
                        :
                    <div>
                        <Typography                        
                            sx={{maxWidth: '80%', margin: 'auto',  color: theme.palette.decorative.lightBrown}}
                            variant='h6' fontFamily={theme.typography.fontFamily}
                            >   
                            { userData.inUsers ?
                                <div dir="rtl">
                                ברוך שובך,
                                </div>          
                                :
                                <div dir="rtl">
                                שלום! אינך רשום במערכת. <br></br>
                                כתוצאה מהתחברותך, מנהלי המערכת יקבלו התראה ויוכלו לרשום אותך במערכת, במידת הצורך.
                                </div>          
                            }
                                <UserData theme={theme} userData={userData}></UserData>
                            
                        </Typography>
                    </div>
                    }
                </div>
                : 
                ""
            }
            {
                userData.admin ? 
                <div>
                    <ThemeProvider theme={theme}>
                    <Button onClick={() => openAdminModal()} sx={{marginTop: '3%'}} variant="contained">לניהול תלמידים</Button>
                    </ThemeProvider>
                </div>
                :
                ""                
            }

            <Dialog open={manageStudents} fullScreen TransitionComponent={Transition}>
                <ThemeProvider theme={theme}>                                        
                    <div style={{ backgroundColor: theme.palette.decorative.darkGrey, paddingTop: '3%'}}>            
                        <Button 
                            sx={{position: 'fixed', right:'2vw'}}
                            onClick={() => setManageStudents(false)} variant="contained">חזרה לדף הפרופיל</Button>
                        <div>
                            <Box sx={{ flexDirection: 'column', flexGrow: 1, display: { xs: 'flex', md: 'flex' } }} justifyContent="center">                
                                <AdminStudentManager theme={theme}></AdminStudentManager>                
                            </Box>                
                        </div>
                    </div>
                </ThemeProvider>
            </Dialog>

            

        </div>
    );    
}

export default Profile;