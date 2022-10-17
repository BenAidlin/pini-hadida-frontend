
import { useState } from "react";
import { ImageList, ImageListItem, Modal } from "@mui/material";
import '../style/Gallery.css';
import ImageListItemsFromFolder from './../components/ImageListItemsFromFolder';

const Gallery = (props) => {
    const theme = props.theme;    
    const [open, setOpen] = useState(false);
    const [imgInModal, setImageInModal] = useState('');
    const handleOpen = (src) => {setOpen(true); setImageInModal(src);}
    const handleClose = () => setOpen(false);
    
    return (        
        <div style={{backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}} className="gallery" justifyContent='center' onClick={()=>{if(open) handleClose();}}>     
            <Modal sx={{display:'flex', alignItems:'center', justifyContent:'center'}}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <img alt={'missing img'} src={imgInModal} onClick={()=>handleClose()}></img>
            </Modal>  

            <ImageList className="imglist" sx={{margin: 'auto', paddingBottom:20, }} gap={10}>
                <ImageListItemsFromFolder 
                context={require.context('../extensions/images/gallery' )}
                handleImageClick={(item) => handleOpen(item)}
                />                
            </ImageList>
        </div>        
    );
}

export default Gallery;

