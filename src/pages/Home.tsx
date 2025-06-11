import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const simulateLogin = ()=>{
        // Simulate a login action
        localStorage.setItem('isAuthenticated', "true");
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
