import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

const Home = () => {

    const { setToken } = useToken(); // Assuming useToken is used to manage authentication state
    const navigate = useNavigate();

    const simulateLogin = ()=>{
        // Simulate a login action
        setToken("simulated_token"); // Set a simulated token
        console.log('User logged in');
        navigate("/me")
    }
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of our application.</p>
            <button onClick={simulateLogin}>
                Inicia Sesion
            </button>
        </div>
    );
}


export default Home;
