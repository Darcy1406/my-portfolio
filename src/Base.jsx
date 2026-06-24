import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/nav/Nav'

export default function Base() {
  return (
    <div id='base'>

        <Nav />

        <div className='' style={{position: 'relative', top: '50px'}}>
            <Outlet />
        </div>

    </div>
  )
}
