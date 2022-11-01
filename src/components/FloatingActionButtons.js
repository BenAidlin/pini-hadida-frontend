import { Fab } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
const FloatingActionButtons = () => {
    return (
        <div>
            <Fab color="inherit" aria-label="call" sx={{marginBottom:'1vh'}} href="tel:0526446744"        
            >            
            <CallIcon>              
            </CallIcon>            
            </Fab>

            <br></br>

            <Fab color="inherit" aria-label="call" href="https://www.facebook.com/PiniHadidaAcademy" target={"_blank"}
            >            
            <FacebookIcon>              
            </FacebookIcon>
            </Fab>
        </div>

    )
}
export default FloatingActionButtons;