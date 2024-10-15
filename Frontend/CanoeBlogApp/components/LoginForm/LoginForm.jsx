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

      <div className={style.formContainer}>
        <form onSubmit={handleSubmit} action=''>
          <input
            type='text'
            onChange={handleChange}
            value={formData.username}
            name='username'
            placeholder='username'
          />
          <input type='password' name='password' placeholder='password' />
          <button>login</button>
        </form>
      </div>
    </div>
  );
}
