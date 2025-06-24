import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import { ProtectedRoute } from "./ProtectedRoute";
import Profile from "@pages/Profile";
import Home from "@pages/Home";

//models
import ReactHookForm from "src/models/FormWithReactHookForm";
import ReactSelect from "src/models/ReactSelect";
import TenStackTable from "src/models/TenStackTable";

export const router = createBrowserRouter(
    [{
        path: "/",
        element: <App />,
        children: [
            {
				path: "/",
                element:<Home/>,
				children: [],
			},
            {
				path: "auth",
				children: [
                    {
                        path: "login",
                        element: <div>Login Page</div>
                    },
                    {
                        path: "register",
                        element: <div>Register Page</div>
                    }
                ],
			},
            {
                path: "profile",
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "react-hook-form",
                element: <ReactHookForm />
            },
            {
                path: "react-select",
                element: <ReactSelect />
            },
            {
                path: "ten-stack-table",
                element: <TenStackTable />
            },
            {
                path: "*",
                element: <div>Not Found</div>
            }
        ]
    }]
)