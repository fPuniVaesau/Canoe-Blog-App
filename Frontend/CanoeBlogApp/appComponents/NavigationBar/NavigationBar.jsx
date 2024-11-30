import canoeLogo from '../../canoeResources/CanoeLogoWebV2.png';
import styles from "./NavigationBar.module.css";

export default function NavigationBar(){

  return(
  <>
        <div className={styles.mainNavBarLogoContainer}>
        {/* Logo and Navigation */}
        <div className={styles.logoNavbarWrapper}>
          <div>
            <a href=''>
              <img
                className={styles.mainLogo}
                src={canoeLogo}
                alt='canoe logo'
              />
            </a>
          </div>

          <div>
            <nav className={styles.mainNavBarListWrapper}>
              <ul>
                <li>
                  <a href=''>Features</a>
                </li>
                <li>
                  <a href=''>Blog</a>
                </li>
                <li>
                  <a href=''>About</a>
                </li>
                <li>
                  <a href=''>Contact</a>
                </li>
                <li>
                  <a href=''>Projects</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Login and Register */}
        <div className={styles.buttonWrapper}>
          <button className={styles.loginBtn}>Log In</button>
          <button className={styles.registerBtn}>Register</button>
        </div>
      </div>
  </>
  )
}