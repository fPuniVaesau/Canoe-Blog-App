import { useState } from 'react';
import style from '../LoginForm/LoginForm.module.css';
import canoe3d from '../../Assets/3dCanoeV2.png';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data submitted: ', formData);
    setFormData({ username: '' });
  };

  return (
    <div className={style.LoginFormConatainer}>
      <div className={style.imageWrapper}>
        <img className={style.image} src={canoe3d} alt='canoe 3d logo' />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={style.fieldsWrapper}>
            <input
              type='text'
              value={formData.username}
              name='username'
              placeholder='username'
              onChange={handleChange}
            />
            <input type='Password' name='password' placeholder='password' />
          </div>
          <button type='submit'>login.</button>
        </form>
      </div>
    </div>
  );
}
