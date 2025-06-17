import { useNavigate } from "react-router-dom";
import useAuth from "@hooks/useAuthContext";

const Profile = () => {
    const {logout} = useAuth(); // Assuming useToken provides token management, though not used here

    const navigate = useNavigate();

    const simulateLogOut = () => {
        logout(); // Remove token from local storage
        console.log("User logged out");
        navigate("/"); // Redirect to home page after logout
    }

    return (
        <div>
            <h1>My Profile</h1>
            <p>This is the profile page.</p>
            <button onClick={simulateLogOut}>Cerrar sesión</button>
        </div>
    );
}

export default Profile;