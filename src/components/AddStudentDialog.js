import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UserData from "../components/UserData";
import { MenuItem, Select, InputLabel } from '@mui/material';
import { useState } from 'react';
import {format} from 'date-fns';
import { useEffect } from 'react';

export default function AddStudentDialog(props) {
  const [open, setOpen] = React.useState(true);
  const theme = props.theme;
  const potentialData = props.potentialData;
  const onClose = props.onClose;
  const [ddValue, setddValue] = useState('white');
  const [subDate, setSubDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [subTime, setSubTime] = useState(3);
  const [joinDate, setJoinDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [addDisabled, setAddDisabled] = useState(true);
  const belts = ['white', 'blue', 'purple', 'brown', 'black']
  const handleClose = () => {
    onClose();
    setOpen(false);
  };
  const handleDDChange = (value) => {    
    setddValue(value.target.value);
  }
  const addStudent = async () => {
    // send request..  
    setAddDisabled(false);
    const addReq = await fetch(process.env.REACT_APP_api_route + '/users/user/' 
        + potentialData._id + '?rank='+ddValue 
        + '&lastSubscriptionDate='+subDate
        + '&joinDate='+joinDate
        + '&subscriptionTime='+subTime.toString(), {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json'
        }
    });
    console.log(addReq);
    setOpen(false);
  }
  useEffect(()=>{
    if(addDisabled && joinDate && subTime && subDate && ddValue) setAddDisabled(false);
  }, [addDisabled,joinDate,subTime,subDate,ddValue])
  return (
    <div >
      <Dialog open={open} onClose={handleClose} dir='rtl'>
        <DialogTitle dir={'rtl'}>הוספת תלמיד - {potentialData.name}</DialogTitle>
        <DialogContent>
          <DialogContentText dir='rtl'>
            להוספת תלמיד יש להוסיף תאריך כניסה למועדון, תאריך תחילת מנוי ודרגת התלמיד.
          </DialogContentText>
          <div >
                <UserData userData={potentialData} theme={theme}></UserData>
            </div>
          <TextField
            autoFocus
            value={joinDate}
            margin="dense"
            id="joinDate"
            label="תאריך כניסה למועדון"
            type="date"            
            variant="standard"
            InputLabelProps={{ shrink: true }}
            dir={'rtl'}
            onChange={(value)=>{setJoinDate(value.target.value);}}
          />
          <TextField
            autoFocus
            value={subDate}
            margin="dense"
            id="subscription"
            label="תאריך מנוי אחרון"
            type="date"            
            variant="standard"
            InputLabelProps={{ shrink: true }}
            dir={'rtl'}
            onChange={(value)=>{setSubDate(value.target.value);}}
          />
        <TextField
            autoFocus
            value={subTime}
            margin="dense"
            id="subscription"
            label="זמן תשלום מנוי בחודשים"
            type="number"            
            variant="standard"
            InputLabelProps={{ shrink: true }}
            dir={'ltr'}
            onChange={(value)=>{setSubTime(value.target.value);}}
          />
        <InputLabel id="select-rank" dir='rtl'>חגורה</InputLabel>
        <Select
            labelId="select-rank"
            id="demo-simple-select"
            value={ddValue}
            label="rank"
            onChange={handleDDChange}
            dir={'rtl'}            
        >
            {
                belts.map(b => (
                    <MenuItem dir='rtl' value={b}><img style={{maxWidth:'15%'}} src={require('./../extensions/images/profile/'+ b+'.png')} alt={"no rank"}></img></MenuItem>
                ))
            }            
        </Select>
        

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button disabled={addDisabled} onClick={addStudent}>הוסף תלמיד</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}