import Nav from "@components/Nav/Nav";
import "./Layout.scss";

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