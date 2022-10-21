import '../style/Gallery.css';
import ImageListItemsFromFolder from './../components/ImageListItemsFromFolder';

const Gallery = (props) => {
    const theme = props.theme;    
    return (        
        <div style={{paddingTop: '14vh', minHeight: '86vh',
            backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}} 
            justifyContent='center'>     
                <ImageListItemsFromFolder 
                context={require.context('../extensions/images/gallery' )}
                imageSx={null}
                />                
        </div>        
    );
}

export default Gallery;

