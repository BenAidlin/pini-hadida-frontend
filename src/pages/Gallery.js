import { useState } from "react";
import { ImageList, ImageListItem, Modal, Box, Typography } from "@mui/material";
import '../style/Gallery.css'
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const Gallery = (props) => {
    const images = importAll(require.context('../extensions/images/gallery'))
    const [open, setOpen] = useState(false);
    const [imgInModal, setImageInModal] = useState('');
    const handleOpen = (src) => {setOpen(true); setImageInModal(src);}
    const handleClose = () => setOpen(false);
    
    return (        
        <div className="gallery" justifyContent='center' onClick={()=>{if(open) handleClose();}}>     
            <Modal sx={{display:'flex', alignItems:'center', justifyContent:'center'}}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <img src={imgInModal} onClick={()=>handleClose()}></img>
            </Modal>  

            <ImageList className="imglist" sx={{margin: 'auto', paddingBottom:20}} gap={10}>
            {Object.values(images).map((item) => (
                <ImageListItem key={item}>
                <img 
                    src={`${item}`}
                    srcSet={`${item}`}
                    alt={item}
                    loading="lazy"
                    onClick={()=>{handleOpen(item)}}
                />
                </ImageListItem>
            ))}
            </ImageList>
        </div>        
    );
}

export default Gallery;

