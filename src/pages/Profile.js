const Profile = (props) => {
    const userToken = props.userToken;
    return (
        <div>
            {userToken != "" && userToken != null ?
             <h1 style={{marginTop: "20vh"}}>Logged in successfully</h1> : <h1 style={{marginTop: "20vh"}}>Not logged in</h1>}
        </div>
    );    
}

export default Profile;