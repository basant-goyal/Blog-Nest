import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth' 
import { login, logOut } from './store/authSlice';
import {Header , Footer } from './components/index'
import { Outlet } from 'react-router-dom';

function App() {
  /* // error because we make project using vite and trying with create react conventions
  // console.log(Process.env.REACT_APP_APPWRITE_URL);
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
  console.log(import.meta.env.REACT_APP_APPWRITE_URL); 
  // undefined, as naming convention should start with VITE_ to expose the varaible */

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logOut())
      }
    })
    .finally(()=> setLoading(false))
  },[])
 
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : 
  
  (<div className='w-screen h-screen flex flex-col justify-center font-bold text-2xl'>
    <h1>Loading...</h1>
    </div>)
}

export default App
