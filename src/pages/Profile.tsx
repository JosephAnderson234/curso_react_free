import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    const simulateLogOut = () => {
        localStorage.removeItem("isAuthenticated");
        console.log("User logged out");
        navigate("/"); // Redirect to home page after logout
        // Redirect to home or login page if needed
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