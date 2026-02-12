import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js"
import { login, logout } from './store/authSlice.js'
import {Header,Footer} from './components/index.js'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  console.log('App component rendered', import.meta.env.VITE_APPWRITER_API_URL)

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await authService.getCurrentUser();

        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
        }

      } catch (error) {
        console.error("Failed to fetch current user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-600' >
      <div className="w-full block">
        <Header/>
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ) :
    null;
}

export default App
