import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-1 md:py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex items-center justify-between gap-2 md:gap-4 flex-nowrap'>

          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link to='/'>
              <Logo width='30px' className='md:w-[70px]'   />
            </Link>
          </div>

          {/* User Name - In nav bar */}
          {authStatus && (
            <div className='text-white font-medium text-[8px] md:text-xs lg:text-base truncate max-w-[80px] md:max-w-[150px] flex-shrink-0'>
              {userData ? (userData.name || userData.email) : null}
            </div>
          )}

          {/* Navigation */}
          <ul className='flex ml-auto gap-0.5 md:gap-2 flex-wrap justify-end flex-shrink-0'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-1 md:px-3 lg:px-6 py-0.5 md:py-1 lg:py-2 text-[8px] md:text-xs lg:text-base duration-200 hover:bg-blue-100 rounded-full whitespace-nowrap font-medium'
                >{item.name}</button>
              </li>
            ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header