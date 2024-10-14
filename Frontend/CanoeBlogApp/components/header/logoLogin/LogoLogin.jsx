import { Link } from "react-router-dom";
import style from "../logoLogin/LogoLogin.module.css";
import Logo from "../../../Assets/CanoeLogoWebV2.png"

export default function LogoLogin() {
  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.titleContainer}>
          <img className={style.CanoeLogo} src={Logo} alt="Canoe Logo" />
          <h1 className={style.title}>
            <Link to="/homepage">Canoe.</Link>
          </h1>
        </div>
        <nav className={style.navContainer}>
          <ul>
            <li>
              <Link to="/login"> Login</Link >
            </li>
            <li>
              <Link to='/register'>register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
