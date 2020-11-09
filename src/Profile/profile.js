import React from 'react';
import PropTypes from "prop-types";

const Profile = (props) => {
    const handleName = () =>{
        alert(props.fname)
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", fontSize: 20 }} onClick={handleName} >
                <h1 style={{color:"white"}}>My name is&nbsp;</h1> <h1 style={{ color: "red" }}>{props.fname}</h1>
            </div>
            <div style={{ color:"white", textAlign:"center", marginTop:50, marginRight:270, marginLeft:270, fontSize: 20, fontWeight: "Bolder",backgroundColor:"grey", borderRadius:10, padding:15 }}>
                <p>{props.bio}</p>
                <p>{props.adress}</p>
            </div>
            <div>
                <img style={{width:"15%", height:"15%", marginLeft:1100, marginTop:-550}} src={props.children}/>
            </div>
        </>
    );
}

Profile.propTypes={
    fname: PropTypes.string,
    bio: PropTypes.string,
    adress: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

Profile.defaultProps={
    fname: 'Pleast Insert Your Name',
    bio: 'Please Insert Your Bio',
    adress: 'Please Insert Your Adress',
    children: '/facebook_20200925134801.jpg'
}

export default Profile;