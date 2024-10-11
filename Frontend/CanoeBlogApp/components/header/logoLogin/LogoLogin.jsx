import style from "../logoLogin/LogoLogin.module.css";
import Logo from "../../../Assets/CanoeLogoWebV2.png"

export default function LogoLogin() {
  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.titleContainer}>
          <img src={Logo} alt="Canoe Logo" />
          <h1 className={style.title}>
            <a href='#'>Canoe.</a>
          </h1>
        </div>
        <nav className={style.navContainer}>
          <ul>
            <li>
              <a href='#'>login</a>
            </li>
            <li>
              <a href='#'>register</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
