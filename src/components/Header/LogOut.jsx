import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logoutUser()
        .then(() => {
            dispatch(logout())
        })
        .catch ((error) => {
            console.error("Logout failed:", error)
        })
    }
  return (
    <button
    className='inline-block px-1 md:px-3 lg:px-6 py-0.5 md:py-1 lg:py-2 text-[8px] md:text-xs lg:text-base duration-200 hover:bg-blue-100 rounded-full font-medium'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn