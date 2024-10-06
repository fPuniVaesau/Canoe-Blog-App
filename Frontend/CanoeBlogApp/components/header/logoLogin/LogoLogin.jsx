import style from "../logoLogin/LogoLogin.module.css";

export default function LogoLogin() {
  return (
    <>
      <header className={style.headerContainer}>
        <div>
          <h1 className={style.title}>my blog.</h1>
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
      </header>
    </>
  );
}
