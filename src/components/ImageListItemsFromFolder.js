import { ImageListItem } from "@mui/material";

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}  
const ImageListItemsFromFolder = (props) => {    
    const handleImageClick = props.handleImageClick;   
    const context = props.context;    
    const imageSx = props.imageSx;    
    const images = importAll(context);    
    return (
        Object.values(images).map((item) => (
            <ImageListItem key={item} sx={imageSx}>
            <img 
                src={`${item}`}
                srcSet={`${item}`}
                alt={item}
                loading="lazy"
                onClick={()=>{handleImageClick(item)}}                
            />
            </ImageListItem>
        ))
    )
}
export default ImageListItemsFromFolder;