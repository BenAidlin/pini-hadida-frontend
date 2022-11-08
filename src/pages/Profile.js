import { Button, ThemeProvider, Typography, Modal, CircularProgress } from "@mui/material";
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
    const openAdminModal = async () => {
        setAdminModal(true);
        const usersReq = await fetch(process.env.REACT_APP_api_route + '/users', {
            method: 'GET',
            headers:{
              'Content-Type' : 'application/json'
            }
        });
        let users = await usersReq.json();
        console.log(users);
        const potentialsReq = await fetch(process.env.REACT_APP_api_route + '/users/potentials', {
            method: 'GET',
            headers:{
              'Content-Type' : 'application/json'
            }
        });
        let potentials = await potentialsReq.json();
        console.log(potentials);
        setAdminModalData(
            <div style={{margin: 'left'}}>            
                <div style={{width: '30vw',  float: 'left' }}>
                    משתמשים רשומים
                    {users.map(u => <UserData theme={theme} userData={u}></UserData>)}
                </div>
                <div style={{width: '30vw', float: 'left' }}>
                    משתמשים שהתחברו
                    {potentials.map(u => <UserData theme={theme} userData={u}></UserData>)}
                </div>
            </div>
        );
        
    }
    const [adminModalData, setAdminModalData] = useState(
        <div>
            <CircularProgress color="inherit" />
        </div>
    );
    
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
                    <Button onClick={() => openAdminModal()} sx={{marginTop: '3%'}} variant="contained">לניהול תלמידים</Button>
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
                    {adminModalData}
                </Modal> 

        </div>
    );    
}

export default Profile;