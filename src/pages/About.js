import { Avatar } from "@mui/material";

const About = (props) => {
    const theme = props.theme;
    return (
        <div style={{paddingTop: '14vh', minHeight: '86vh',
        backgroundColor: theme.palette.decorative.darkGrey, overflowY:'hidden'}}>
            <Avatar
                alt="Pini hadida"
                src={require("./../extensions/images/about/pinihadida-profile.jpg")}            
                sx={{height: '40vh', width: '40vh', margin: 'auto'}}
            >
            </Avatar>
        </div>
    );    
}

export default About;