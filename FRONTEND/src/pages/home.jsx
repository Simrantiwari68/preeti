import RestoreIcon from "@mui/icons-material/Restore";
import { Button, IconButton, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../context/AuthContext"; // Adjusted path
import withAuth from "../utils/withAuth";

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const {addToUserHistory} = useContext(AuthContext);
   


    let handleJoinVideoCall = async () => {
        if (meetingCode.trim() === "") {
            alert("Please enter a valid meeting code.");
            return;
        }
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    };

    return (
        <>
            <div className="navBar">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h2>Zoomera</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                        onClick={() => {
                            navigate("/history");
                        }}
                    >
                        <RestoreIcon />
                    </IconButton>
                    <p>History</p>

                    <Button
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/auth");
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <TextField
                                onChange={(e) => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Meeting Code"
                                variant="outlined"
                            />
                            <Button onClick={handleJoinVideoCall} variant="contained">
                                Join
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="rightPanel">
                    <img src="/logo3.png" alt="logo image" />
                </div>
            </div>
            <footer className="footer">
    <p>© 2024 Zoomera | All Rights Reserved</p>
  </footer>
            
        </>
    );
}

export default withAuth(HomeComponent);


















