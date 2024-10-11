import style from '../Welcome/Welcome.module.css';
export default function Welcome() {
  return (
    <div className={style.welcomeContainer}>
      <h1 className={style.title}>Welcome.</h1>
      <div className={style.enterBtnContainer}>
        <a href='homepage'>enter.</a>
      </div>
    </div>
  );
}
