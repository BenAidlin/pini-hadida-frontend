import { useState } from "react";
import UserData from "../components/UserData";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import {  Paper, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import AdjustStudentDialog from "./AdjustStudentDialog";

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
    const [updateStudentDialogOpen, setUpdateStudentDialogOpen] = useState(false);
    const [updateStudentDialog, setUpdateStudentDialog] = useState('');
    
    const handlePotentialClick = (potentialData)=> {
        setAddStudentDialog(
            <div style={{backgroundColor: theme.palette.decorative.darkGrey}}>
                <AdjustStudentDialog onClose={()=>setAddStudentDialogOpen(false)} theme={theme} userData={potentialData}
                    okButton={'הוסף תלמיד'} title={'הוספת תלמיד - ' + potentialData.name} text={'להוספת תלמיד יש להוסיף תאריך כניסה למועדון, תאריך תחילת מנוי ודרגת התלמיד.'}
                    okAction={addStudent}
                ></AdjustStudentDialog>
            </div>
        );
        setAddStudentDialogOpen(true);
    }
    const handleUserClick = (userData)=> {
        setUpdateStudentDialog(
            <div style={{backgroundColor: theme.palette.decorative.darkGrey}}>
                <AdjustStudentDialog onClose={()=>setUpdateStudentDialogOpen(false)} theme={theme} userData={userData}
                    okButton={'עדכן תלמיד'} title={'עידכון פרטי תלמיד - ' + userData.name} text={''}
                    okAction={updateStudent} 
                ></AdjustStudentDialog>
            </div>
        );
        setUpdateStudentDialogOpen(true);
    }
    const addStudent = async () => {        
        alert('add student')
        /*
        const addReq = await fetch(process.env.REACT_APP_api_route + '/users/user/' 
            + userData._id + '?rank='+ddValue 
            + '&lastSubscriptionDate='+subDate
            + '&joinDate='+joinDate
            + '&subscriptionTime='+subTime.toString(), {
            method: 'POST',
            headers:{
              'Content-Type' : 'application/json'
            }
        });
        console.log(addReq);
        setOpen(false);*/
    }
    const updateStudent = async () => {

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
                    {users.map(u =><Box key={u._id} onClick={()=>handleUserClick(u)} justifyContent='center'><UserData theme={theme} userData={u}></UserData></Box>)}
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
                    {potentials.map(p => <Box key={p._id} onClick={()=>handlePotentialClick(p)} justifyContent='center'><UserData theme={theme} userData={p}></UserData></Box>)}
                </Box>                
            </div>
            {
                addStudentDialogOpen ? 
                addStudentDialog : ''
            }  
            {
                updateStudentDialogOpen ?
                updateStudentDialog : ''
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