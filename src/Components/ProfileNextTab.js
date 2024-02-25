//import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import "./BaxtureStyle.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { SlUserFollow } from "react-icons/sl";
import { SlUserUnfollow } from "react-icons/sl";
import { CiStar } from "react-icons/ci";

const ProfileNextTab = (props) => {

    const { apiTransfer } = props;
    const { id, fullName, emailID, userPhone, website, username } = apiTransfer;

    const [name, changeName] = useState("Follow")
    const [styleBtn, changeStyle] = useState("followbtnchange");
    const [followIcon, followIconChange] = useState(<SlUserFollow style={{marginRight:"15px"}}/>);
    const [starBtn, changeStarBtn] = useState("")
    
    
    const followButton = useCallback(() => {
        if (name === "Follow") {
            changeName(() => "Unfollow");
            changeStyle(() => "unFollowbtnchange");
            followIconChange(()=><SlUserUnfollow style={{marginRight:"15px"}}/>);
            changeStarBtn(()=><CiStar style={{marginLeft:"15px",height:"35px"}} />);
        }

        else {
            changeName(() => "Follow");
            changeStyle(() => "followbtnchange");
            followIconChange(()=><SlUserFollow style={{marginRight:"15px"}}/>);
            changeStarBtn(()=>"")
        }
    });

    const deleteBtn = ()=>{
        props.handleDelete(id);
    }

    return (
        <div className="d-flex flex-row justify-content-center">

            <div className="cardTable" id={id}>
                <div className="d-flex flex-row justify-content-center">
                    <img style={{ marginTop: "5vh", width: "13vh", borderRadius: "100vh" }} alt="noImage" src={`https://api.dicebear.com/7.x/initials/svg?seed=${username}`} />
                </div>
                <h1 style={{ marginTop: "5vh", paddingLeft: "5vh", paddingBottom: "3vh", paddingRight: "5vh", textAlign: "center" }}>{fullName}{starBtn}</h1>

                <p1 style={{ marginTop: "5vh", paddingLeft: "3vh",color:"#9c8daa" }}><MdAlternateEmail style={{ marginRight: "10px",color:"#9c8daa" }} />{emailID}</p1>
                <br />
               
                <p1 style={{ marginTop: "5vh", paddingLeft: "3vh",color:"#9c8daa" }}> <FiPhoneCall style={{ marginRight: "10px",color:"#9c8daa" }} /> {userPhone}</p1>
                <br />
                <p1 style={{ marginTop: "5vh", paddingLeft: "3vh",color:"#9c8daa" }}><TbWorld style={{ marginRight: "10px",color:"#9c8daa" }} />{website}</p1>
                <br />
                <button onClick={followButton} className={styleBtn} style={{fontWeight:"bold",marginTop: "3vh", marginLeft: "3vh", borderRadius: "4px", width:"200px", height:"50px" }}>{followIcon }{name}</button>
                <button onClick={deleteBtn} style={{ fontWeight:"bold",backgroundColor: "white", borderColor: "#8a8ad4", marginLeft: "3vh", color: "#228be6", borderRadius: "4px", width:"200px", height:"50px" }}>Delete</button>
            </div>
        </div>


    )
}

export default ProfileNextTab;