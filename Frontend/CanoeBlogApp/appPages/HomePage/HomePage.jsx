import styles from "./HomePage.module.css";

export default function HomePage(){
  return (
    <>
      {/* navbar */}
      <div className={styles.mainContainer}>
        {/* Logo and Navigation */}
        <div className={styles.logoNavbarWrapper}>
          <div>
            <a href=''>logo here</a>
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


      {/* search bar */}
      <div className={styles.searchBarWrapper}>
        <input type="search" placeholder="Search" className={styles.searchBar} />
      </div>

    </>
  );
}