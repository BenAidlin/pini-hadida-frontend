import { Button } from '@mui/material';
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';


const Login = (props) => {
    const handleLoginOuter = props.handleLogin;    
    const handleLogin = async (googleData) => {                      
        console.log(googleData);        
        // send post to api, api should decode the jwt, api saves user's data, api sends back user system identifier

        // for the mean time save the token itself
        localStorage.setItem('loginData', JSON.stringify(googleData.credential));
    };
    const handleFailure = (result) => {
        alert('unsuccessfull login, something went wrong..')
    };
    return (
        <div>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_google_client_id}>
                <GoogleLogin     
                    type={'icon'}               
                    theme={'filled_black'}
                    logo_alignment={'left'}
                    shape={'circle'}
                    onSuccess={handleLogin}
                    onError={handleFailure}
                    cookiePolicy={'single_host_origin'}
                ></GoogleLogin>            
            </GoogleOAuthProvider>            
        </div>
    );    
};

export default Login;