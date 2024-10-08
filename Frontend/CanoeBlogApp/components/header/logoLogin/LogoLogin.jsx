import style from "../logoLogin/LogoLogin.module.css";

export default function LogoLogin() {
  return (
    <>
      <div className={style.headerContainer}>
        <div>
          <h1 className={style.title}>
            <a href='#'>myBlog.</a>
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
