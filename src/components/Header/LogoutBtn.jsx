import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/authSlice'
import authService from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const logoutHandler = ()=>{
        authService.logOut().then(()=>{
            dispatch(logOut())
            navigate('/')
        })
    }

  return (
    <div className='inline-block hover:cursor-pointer px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</div>
  )
}

export default LogoutBtn