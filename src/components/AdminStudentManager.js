import { useState } from "react";
import UserData from "../components/UserData";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import {  Paper, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import AddStudentDialog from "./AddStudentDialog";

const AdminStudentManager = (props) => {
    const users = props.users;
    const potentials = props.potentials;
    const theme = props.theme;
    const [onSigned, setOnSigned] = useState(true);    
    const listOfUsers = []; 
    
    users.forEach((user, index) => {
        if(index % 3 === 0){
            listOfUsers.push([]);
        }
        listOfUsers[listOfUsers.length - 1].push(user);        
    });

    const listOfPoten = []; 
    potentials.forEach((poten, index) => {
        if(index % 3 === 0){
            listOfPoten.push([]);
        }
        listOfPoten[listOfPoten.length - 1].push(poten);        
    });

    const [addStudentDialogOpen, setAddStudentDialogOpen] = useState(false);
    const [addStudentDialog, setAddStudentDialog] = useState('');

    const handlePotentialClick = (potentialData)=> {
        setAddStudentDialog(
            <div style={{backgroundColor: theme.palette.decorative.darkGrey}}>
                <AddStudentDialog onClose={()=>setAddStudentDialogOpen(false)} theme={theme} potentialData={potentialData}></AddStudentDialog>
            </div>
        );
        setAddStudentDialogOpen(true);
    }
    return (
        <div style={{ backgroundColor: theme.palette.decorative.darkGrey, textAlign: 'center', minHeight: '100vh'}}>            
        <Typography variant="h5" fontFamily={theme.typography.fontFamily}
            color={theme.palette.decorative.lightBrown} dir={'rtl'}>
            <div style={{display: onSigned ? 'block' : 'none'}}>
                <div style={{ display:'block',  marginTop: '5vh', paddingBottom: '3vh'}}>
                    תלמידים פעילים  
                    <p style={{fontSize: 'medium'}}>לעריכת פרטי תלמיד לחץ על התלמיד</p>
                </div>

                <Box sx={{ display: 'grid', gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)'}, 
                    paddingBottom: '10vh'}} justifyContent='center' alignItems="center">
                    {users.map(u =><Box justifyContent='center'><UserData theme={theme} userData={u}></UserData></Box>)}
                </Box>                
            </div>    

            <div style={{display: !onSigned ? 'block' : 'none', justifyContent: 'center'}}>
                <div style={{ display:'block',  marginTop: '5vh'}}>
                    משתמשים שהתחברו 
                    <p style={{fontSize: 'medium'}}>להוספת משתמש לתלמידים לחץ על המשתמש</p>
                </div>
                <Box sx={{ display: 'grid', gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)'}, 
                    paddingBottom: '10vh', }} justifyContent='center'  alignItems="center">
                    {potentials.map(p => <Box onClick={()=>handlePotentialClick(p)} justifyContent='center'><UserData theme={theme} userData={p}></UserData></Box>)}
                </Box>                
            </div>
            {
                addStudentDialogOpen ? 
                addStudentDialog : ''
            }  
            
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