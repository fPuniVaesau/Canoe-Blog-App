import { useState } from "react";

export default function LoginForm(){
    
    const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data submitted: ', formData);
    setFormData({username: ""});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={formData.username}
          name='username'
          placeholder='username'
          onChange={handleChange}
        />
        <input type='Password' name='password' placeholder='password' />
        <button type='submit'>login.</button>
      </form>
    </div>
  );
}