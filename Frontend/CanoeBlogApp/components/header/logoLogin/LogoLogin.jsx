import style from "../logoLogin/LogoLogin.module.css";

export default function LogoLogin() {
  return (
    <>
      <header className={style.headerContainer}>
        <div>
          <p>my blog.</p>
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
