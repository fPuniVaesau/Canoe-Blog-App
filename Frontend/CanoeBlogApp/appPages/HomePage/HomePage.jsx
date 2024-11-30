import styles from './HomePage.module.css';
import canoeLogo from '../../canoeResources/CanoeLogoWebV2.png';
export default function HomePage() {
  return (
    <>
      {/* navbar */}
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

      {/* search bar */}
      <div className={styles.searchBarWrapper}>
        <input
          type='search'
          placeholder='Search'
          className={styles.searchBar}
        />

        <button className={styles.searchBtn}>
          <svg
            className={styles.iconSearch}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
          </svg>
        </button>
      </div>

      {/* blog home page message */}
      <div className={styles.openingMessageWrapper}>
        <div className={styles.welcomeQuoteWrapper}>
          <h2>Take courage, lose site of the shores & discover new sea's.</h2>
          <p>what is your journey?</p>
        </div>
      </div>

      {/* blog post preview */}
      <div>

        

      </div>
    </>
  );
}
