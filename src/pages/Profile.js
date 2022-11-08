import { Button, ThemeProvider, Typography, Modal } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import UserData from "../components/UserData";

const Profile = (props) => {
    let userData = props.userData;
    const theme = props.theme;
    const navigate = useNavigate();
    const [adminModal, setAdminModal] = useState(false);
    let isLoggedIn = userData !== "" && userData !== null ? true : false;    

    if(!isLoggedIn){
        navigate(process.env.REACT_APP_route_prefix);
    }
    else {
        // send server request for data and apply to userData
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
                <h1>Not logged in</h1>
            }
            {
                userData.admin ? 
                <div>
                    <ThemeProvider theme={theme}>
                    <Button onClick={()=>setAdminModal(true)} sx={{marginTop: '3%'}} variant="contained">לניהול תלמידים</Button>
                    </ThemeProvider>
                </div>
                :
                ""
            }
                <Modal sx={{display:'flex', alignItems:'center', justifyContent:'center'}}
                open={adminModal}
                onClose={()=> setAdminModal(false)}
                
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <div>
                        hi
                    </div>
                </Modal> 

        </div>
    );    
}

export default Profile;