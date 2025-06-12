import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './routes/ProtectedRoute'
import { publicRoutes, privateRoutes } from './routes/MisRutas'
import TokenContextProvider from './context/TokenProvider'
import './App.css'


function App() {


  return (
    <div className='w-full h-dvh'>
      <TokenContextProvider>
        <Routes>
          {
            publicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.component}
              />
            ))
          }
          <Route element={<ProtectedRoutes url='/' />}>
            {
              privateRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))
            }
          </Route>
        </Routes>
      </TokenContextProvider>
    </div>
  )
}

export default App
