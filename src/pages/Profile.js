const Profile = (props) => {
    const userToken = props.userToken;
    return (
        <div>
            <h3>{userToken}</h3>
        </div>
    );    
}

export default Profile;