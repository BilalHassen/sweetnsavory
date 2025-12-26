import React from 'react'
import Nav from '../components/Nav/Nav'
function Layout({children}) {
  return (
    <>
<Nav/>
    <div className='layout'>
        <main className="layout__wrapper">{children}</main>
    </div>
    </>
  )
}

export default Layout