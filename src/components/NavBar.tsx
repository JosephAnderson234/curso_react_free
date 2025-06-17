import useAuth from "@hooks/useAuthContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate(); // Hook to programmatically navigate
    const { logout, session } = useAuth(); // Assuming useAuth provides logout management
    const handleLogout = () => {
        logout();
        navigate("/"); // Redirect to login after logout
    }
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
                    <li><a href="/profile" className="text-white hover:text-gray-400">Profile</a></li>
                    <li><a href="/auth/login" className="text-white hover:text-gray-400">Login</a></li>
                    <li><a href="/auth/register" className="text-white hover:text-gray-400">Register</a></li>
                    {session ? (<li><button type="submit" onClick={handleLogout} className="text-white hover:text-gray-400">Logout</button></li>
                    ) : null}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;