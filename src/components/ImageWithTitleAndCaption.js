import {Box, ImageList} from '@mui/material'

function ImageWithTitleAndCaption(props){
    const theme = props.theme;
    return (
        <Box sx={{}}>
            <div style={{color: theme.typography.color, fontFamily: theme.typography.fontFamily}}>
                <h2 >{props.item.name}</h2>
                <p>{props.item.description}</p>
            </div>            
            <ImageList className="imglist" sx={{margin: 'auto', }} gap={10}>
                {props.item.imageListFromFolder}
            </ImageList>            
        </Box>
    )
}

export default ImageWithTitleAndCaption;