import { Link } from 'react-router-dom';
import style from '../Welcome/Welcome.module.css';
export default function Welcome() {
  return (
    <div className={style.welcomeContainer}>
      <h1 className={style.title}>Welcome.</h1>
      <div className={style.enterBtnContainer}>
        <Link to='/homepage'>enter.</Link>
      </div>
    </div>
  );
}
