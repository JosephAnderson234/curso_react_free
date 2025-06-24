import useAuth from "@hooks/useAuthContext";
const Navbar = () => {

    const { logout, session} = useAuth();
    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    {session ? (<li><button type="submit" onClick={handleLogout} className="text-white hover:text-gray-400">Logout</button></li>
                    ) : null}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;