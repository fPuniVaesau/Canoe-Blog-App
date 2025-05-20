import canoeLogo from '../../canoeResources/CanoeLogoWebV2.png';
import styles from './NavigationBar.module.css';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <>
      <div className={styles.mainNavBarLogoContainer}>
        {/* Logo and Navigation (we need to work on stylng the a tags for the navbar)*/}
        <div className={styles.logoNavbarWrapper}>
          <div>
            <NavLink to='/api/home'>
              <a href=''>
                <img
                  className={styles.mainLogo}
                  src={canoeLogo}
                  alt='canoe logo'
                />
              </a>
            </NavLink>
          </div>

          <div>
            <nav className={styles.mainNavBarListWrapper}>
              <ul>
                <NavLink to="api/featured">
                  <li>
                    <p href=''>Featured</p>
                  </li>
                </NavLink>

                <NavLink to="api/blogs">
                  <li>
                    <p href=''>Blogs</p>
                  </li>
                </NavLink>

                <NavLink to="api/about">
                  <li>
                    <p href=''>About</p>
                  </li>
                </NavLink>

                <NavLink to="api/contact">
                  <li>
                    <p href=''>Contact</p>
                  </li>
                </NavLink>

                <NavLink to="api/projects">
                  <li>
                    <p href=''>Projects</p>
                  </li>
                </NavLink>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.dropdownMenu}>
          <button>menu</button>
        </div>

        {/* Login and Register (we need to work on styling the a tags for the for the register and login buttons)*/}
        <div className={styles.buttonWrapper}>
          <NavLink to='/api/login'>
            <a>Log In</a>
          </NavLink>

          <NavLink to="/api/register">
            <a>Register</a>
          </NavLink>
        </div>
      </div>
    </>
  );
}
