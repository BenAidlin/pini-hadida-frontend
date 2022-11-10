import { useState } from "react";
import UserData from "../components/UserData";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import { Paper, Typography, Pagination } from "@mui/material";

const AdminStudentManager = (props) => {
    const users = props.users;
    const potentials = props.potentials;
    const theme = props.theme;
    const [onSigned, setOnSigned] = useState(true);

    const listOfUsers = []; 
    users.forEach((user, index) => {
        if(index % 2 === 0){
            listOfUsers.push([]);
        }
        listOfUsers[listOfUsers.length - 1].push(user);        
    });
    const [userPage, setUserPage] = useState(1);

    const listOfPoten = []; 
    potentials.forEach((poten, index) => {
        if(index % 2 === 0){
            listOfPoten.push([]);
        }
        listOfPoten[listOfPoten.length - 1].push(poten);        
    });
    const [potenPage, setPotenPage] = useState(1);

    return (
        <div style={{ backgroundColor: theme.palette.decorative.darkGrey, textAlign: 'center', minHeight: '100vh'}}>            
        <Typography variant="h5" fontFamily={theme.typography.fontFamily}
            color={theme.palette.decorative.lightBrown} dir={'rtl'}>
            <div style={{display: onSigned ? 'block' : 'none'}}>
                <div style={{ display:'block',  marginTop: '5vh'}}>
                    תלמידים פעילים  
                </div>
                <div style={{width: '80vw', display: onSigned ? 'flex' : 'none' , paddingBottom: '10vh'}}>                
                    {listOfUsers[userPage - 1].map(u => <UserData theme={theme} userData={u}></UserData>)}                    
                </div>
                <div dir="ltr" style={{margin: 'auto'}}>
                        <Pagination color="secondary" size="large"
                        count={listOfUsers.length} page={userPage} onChange={(event, value)=>setUserPage(value)} />
                </div>                
            </div>                

            
            <div style={{width: '30vw',display: !onSigned ? 'inline-block' : 'none' }}>
                משתמשים שהתחברו
                {listOfPoten[potenPage - 1].map(u => <UserData theme={theme} userData={u}></UserData>)}
                <div dir="ltr">
                    <Pagination color="secondary" size="large"
                    count={listOfPoten.length} page={potenPage} onChange={(event, value)=>setPotenPage(value)} />
                </div>        
            </div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={onSigned}
                onChange={(event, newValue) => {
                    setOnSigned(newValue);
                }}
                sx={{backgroundColor: theme.palette.decorative.lightBrown, }}
                >                
                <BottomNavigationAction value={true} label="תלמידים פעילים" icon={<ManageAccountsSharpIcon />} />
                <BottomNavigationAction value={false} label="משתמשים שהתחברו" icon={<PersonAddSharpIcon />} />
            </BottomNavigation>
            </Paper>

        </Typography>            
        </div>
    );
}

export default AdminStudentManager;