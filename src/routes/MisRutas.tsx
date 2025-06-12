import Home from "../pages/Home"
import Profile from "../pages/Profile"

export const publicRoutes = [
    {
        path:"/",
        component: <Home />
    },
    {
        path: "/about",
        component: <div>About Page</div>
    }
]


export const privateRoutes = [
    {
        path:"/me",
        component: <Profile />
    },
]