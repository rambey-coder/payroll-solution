import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full h-screen grid grid-rows-12 grid-cols-10 overflow-hidden bg-[#efefef]'>
        <Sidebar />
        <Header />
        <div className='grid col-start-3 row-start-3 col-span-8 h-[800px] px-16'>
          <Outlet />
        </div>
    </div>
  )
}

export default Layout