import React from 'react'
import NavigationMenu from '../components/NavigationMenu'
import { Outlet } from 'react-router-dom'
import './Layout.css';

export default function Layout() {
  return (
    <div className='container-fluid mt-5 '>
      <NavigationMenu/>
      <main className=' mt-5'>
        <Outlet/>
      </main>
    </div>
  )
}
