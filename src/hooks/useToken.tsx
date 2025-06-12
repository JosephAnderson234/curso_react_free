import { useContext } from "react";

import { TokenContext } from "../context/contexts";

const useToken = () =>{
    const context = useContext(TokenContext);
    
    if (context === null) {
        throw new Error("useToken must be used within a TokenProvider");
    }

    return context;

}

export default useToken;