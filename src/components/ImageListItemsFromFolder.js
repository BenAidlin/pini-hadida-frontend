import { ImageList, ImageListItem, Modal } from "@mui/material";
import { useState } from "react";
import {useSwipeable} from 'react-swipeable';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}  
const ImageListItemsFromFolder = (props) => {    
    const context = props.context;    
    const imageSx = props.imageSx;    
    const images = importAll(context);   
    const [open, setOpen] = useState(false);
    const [imgInModal, setImageInModal] = useState('');
    const handleOpen = (src) => {setOpen(true); setImageInModal(src);}
    const handleClose = () => setOpen(false); 
    const nextModal = () => {
        let newSrc = Object.values(images)[Object.values(images).indexOf(imgInModal)+1];        
        if(newSrc == null) newSrc = Object.values(images)[0];
        setImageInModal(newSrc);
    };
    const prevModal = () => {
        let list = Object.values(images);
        let newSrc = list[list.indexOf(imgInModal)-1];        
        if(newSrc == null) newSrc = list[list.length-1];
        setImageInModal(newSrc);
    };
    const swipeHandlers = useSwipeable({
        onSwipedRight: ()=>{if(open) nextModal();},
        onSwipedLeft: ()=>{if(open) prevModal();}
    });
    return (
        <div>
            <Modal {...swipeHandlers} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}
                open={open}
                onClose={handleClose}
                
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <img alt={'missing img'} src={imgInModal} onClick={()=>handleClose()}></img>
            </Modal> 
            <ImageList className="imglist" sx={{margin: 'auto', }} gap={10}>
                {Object.values(images).map((item) => (
                    <ImageListItem key={item} sx={imageSx}>
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
    )
}
export default ImageListItemsFromFolder;