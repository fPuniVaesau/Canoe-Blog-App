import canoeLogo from '../../canoeResources/CanoeLogoWebV2.png';
import styles from './NavigationBar.module.css';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <>
      <div className={styles.mainNavBarLogoContainer}>
        {/* Logo and Navigation */}
        <div className={styles.logoNavbarWrapper}>
          <div>
            <Link to='/api/home'>
              <a href=''>
                <img
                  className={styles.mainLogo}
                  src={canoeLogo}
                  alt='canoe logo'
                />
              </a>
            </Link>
          </div>

          <div>
            <nav className={styles.mainNavBarListWrapper}>
              <ul>
                <Link>
                  <li>
                    <a href=''>Features</a>
                  </li>
                </Link>

                <Link>
                  <li>
                    <a href=''>Blog</a>
                  </li>
                </Link>

                <Link>
                  <li>
                    <a href=''>About</a>
                  </li>
                </Link>

                <Link>
                  <li>
                    <a href=''>Contact</a>
                  </li>
                </Link>

                <Link>
                  <li>
                    <a href=''>Projects</a>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.dropdownMenu}>
          <button>menu</button>
        </div>

        {/* Login and Register */}
        <div className={styles.buttonWrapper}>
          <Link to='/api/login'>
            <a>Log In</a>
          </Link>

          <Link>
            <a>Register</a>
          </Link>
        </div>
      </div>
    </>
  );
}
