import style from "../logoLogin/LogoLogin.module.css";

export default function LogoLogin() {
  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.titleContainer}>
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
