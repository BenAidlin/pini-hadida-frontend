
import ImageListItemsFromFolder from '../components/ImageListItemsFromFolder';
import Item from './../components/ImageWithTitleAndCaption'
import { useState } from 'react';
import { Modal } from '@mui/material';

const Achievements = (props) => {
    const imageSx = {marginBottom: '20vh'};
    const theme = props.theme;
    const [open, setOpen] = useState(false);
    const [imgInModal, setImageInModal] = useState('');
    const handleOpen = (src) => {setOpen(true); setImageInModal(src);}
    const handleClose = () => setOpen(false);
    var items = [
        {
            name: "IJJIF European Masters - 30/05/2022",
            description: "פיני חדידה זוכה במדליית זהב בקטגוריית מאסטרס מעל 100 קג",
            imageListFromFolder: 
            <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/30-05 jjif erupean masters')}
                handleImageClick={(src)=>{handleOpen(src)}}
                imageSx={imageSx}
            />
        },
        {
            name: "TMS Israel Open Championship - 16/09/2022",
            description: "גבריאל ממן ותומר בקט זוכים במדליות ארד בקטגוריות שלהם",
            imageListFromFolder: 
            <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/16-09 TMS')}
                handleImageClick={(src)=>{handleOpen(src)}}
                imageSx={imageSx}
             />
        },
        {
            name: "IJJIL Israel Jiu-Jitsu League - 30/09/2022",
            description: "יוסף פרל זוכה במדליית זהב, דוד חודוש זוכה במדליית כסף ואלכס יאשקין זוכה במדליית ארד",
            imageListFromFolder: 
            <ImageListItemsFromFolder
                context={require.context('./../extensions/images/achievements/30-09 ijjl')}
                handleImageClick={(src)=>{handleOpen(src)}}
                imageSx={imageSx}
             />
        }
    ]
    
    return (
        <div style={{paddingTop: '14vh', minHeight: '86vh',
            backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}}>
            <Modal sx={{display:'flex', alignItems:'center', justifyContent:'center'}}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <img alt={'missing img'} src={imgInModal} onClick={()=>handleClose()}></img>
            </Modal> 
                {
                    items.map( (item, i) => 
                    <Item style={{}} theme={theme} key={i} item={item} /> )
                }
        </div>      
    );
}

export default Achievements;