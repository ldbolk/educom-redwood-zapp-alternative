import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Toaster } from '@redwoodjs/web/toast'

const HeaderLayout = ({ children }) => {
  return(
    <>
    <Toaster />
      <header>
        <h1>
          <Link to={routes.home()}>
            <img src="https://e-learning.educom.nu/assets/images/zapp-banner-6cdd55cdd42815c9c28dd9443933187f.png" width="350" height="115"></img>
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.klanten()}>
                Klanten
              </Link>
            </li>
              <li>
                <Link to={routes.taken()}>Taken</Link>
              </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default HeaderLayout
