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
            <NavLink to='home'>
                <img
                  className={styles.mainLogo}
                  src={canoeLogo}
                  alt='canoe logo'
                />
            </NavLink>
          </div>

          <div>
            <nav className={styles.mainNavBarListWrapper}>
              <ul>
                <NavLink to="featured">
                  <li>
                    <p>Featured</p>
                  </li>
                </NavLink>

                <NavLink to="blogs">
                  <li>
                    <p>Blogs</p>
                  </li>
                </NavLink>

                <NavLink to="about">
                  <li>
                    <p>About</p>
                  </li>
                </NavLink>

                <NavLink to="contact">
                  <li>
                    <p>Contact</p>
                  </li>
                </NavLink>

                {/* <NavLink to="projects">
                  <li>
                    <p>Projects</p>
                  </li>
                </NavLink> */}
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.dropdownMenu}>
          <button>menu</button>
        </div>

        {/* Login and Register (we need to work on styling the a tags for the for the register and login buttons)*/}
        <div className={styles.buttonWrapper}>
          <NavLink to='login' className={styles.loginBtn}>
            Log In
          </NavLink>

          <NavLink to="register" className={styles.registerBtn}>
            Register
          </NavLink>
        </div>
      </div>
    </>
  );
}
