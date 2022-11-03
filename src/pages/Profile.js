import { useNavigate } from "react-router";
import UserData from "../components/UserData";

const Profile = (props) => {
    const userToken = props.userToken;
    const theme = props.theme;
    const navigate = useNavigate();
    let isLoggedIn = userToken !== "" && userToken !== null ? true : false;
    //let userData = null;
    let userData = {
        profilePic: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/stunning-photo-of-camel-in-profile-dejavu-designs.jpg",
        name: "ישראל ישראלי",
        rank: "white",
        timeInAcademy: "3",
        lastSubscriptionDate: "02/03/2022",
    };

    if(!isLoggedIn){
        navigate(process.env.REACT_APP_route_prefix);
    }
    else {
        // send server request for data and apply to userData
    }
    
    return (
        <div style={{paddingTop: '14vh', minHeight: '86vh', backgroundColor: theme.palette.decorative.darkGrey}} >
            {
                isLoggedIn ?
                <div>
                    {
                        userData == null ? 
                        <div>
                        <h1>...שלום! אינך קיים במערכת</h1>
                        <p>דף זה מיועד עבור תלמידים רשומים באקדמיה</p>
                        <p>אנה פנה\י לנציג מטעם האקדמיה בכדי שירשום אותך</p>
                        </div>
                        :
                    <div>
                        <UserData theme={theme} userData={userData}></UserData>
                        
                    </div>
                    }
                </div>
                : 
                <h1>Not logged in</h1>
            }
        </div>
    );    
}

export default Profile;