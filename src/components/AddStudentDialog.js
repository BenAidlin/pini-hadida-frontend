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
export default function AddStudentDialog(props) {
  const [open, setOpen] = React.useState(true);
  const theme = props.theme;
  const potentialData = props.potentialData;
  const onClose = props.onClose;
  const [rank, setrank] = useState('white');
  const [subDate, setSubDate] = useState('16/11/2022');
  const [joinDate, setJoinDate] = useState('16/11/2022');
  const handleClose = () => {
    onClose();
    setOpen(false);
  };
  const handleDDChange = (value) => {

  }
  const addStudent = () => {
    // send request..
    setOpen(false);
  }
  return (
    <div >
      <Dialog open={open} onClose={handleClose} dir='rtl'>
        <DialogTitle dir={'rtl'}>הוספת תלמיד</DialogTitle>
        <DialogContent>
          <DialogContentText dir='rtl'>
            להוספת תלמיד יש להוסיף תאריך כניסה למועדון ותאריך תחילת מנוי.
          </DialogContentText>
          <div style={{backgroundColor:theme.palette.decorative.darkGrey}}>
                <UserData userData={potentialData} theme={theme}></UserData>
            </div>
          <TextField
            autoFocus
            margin="dense"
            id="joinDate"
            label="תאריך כניסה למועדון"
            type="date"            
            variant="standard"
            InputLabelProps={{ shrink: true }}
            dir={'rtl'}
          />
          <TextField
            autoFocus
            margin="dense"
            id="subscription"
            label="תאריך מנוי אחרון"
            type="date"            
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
        <InputLabel id="select-rank" dir='rtl'>חגורה</InputLabel>
        <Select
            labelId="select-rank"
            id="demo-simple-select"
            value={''}
            label="rank"
            onChange={handleDDChange}
            dir={'rtl'}
            
        >
            <MenuItem value={'white'}>לבן</MenuItem>
            <MenuItem value={'blue'}>כחול</MenuItem>
            <MenuItem value={'purple'}>סגול</MenuItem>
            <MenuItem value={'brown'}>חום</MenuItem>
            <MenuItem value={'black'}>שחור</MenuItem>
        </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={addStudent}>הוסף תלמיד</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}