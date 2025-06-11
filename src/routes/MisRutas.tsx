import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Pokemon from "../pages/Pokemon"

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
    {
        path:"/pokemon",
        component: <Pokemon/>
    }
]