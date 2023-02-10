import { React, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Data, setData] = useState({
    email: '',
    password: '',
  });
  const myhandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const mynav = useNavigate();

  const mysub = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/accounts/authenticate', Data)
      .then((y) => {
        console.log(y);
        localStorage.setItem('ERPdata', JSON.stringify(y.data));
        // toast('login successfully');
        mynav('/dashboard/app');
      })
      .catch((y) => {
        // toast('404');
      });
  };
  return (
    <div>
      <div className="midd toop mt-5 p-4">
        <form onSubmit={mysub}>
          <h1 className="text-center  bg-light  p-2 rounded-2  mb-4 headerr">Log-In</h1>

          <TextField label="email" name="email" onChange={myhandler} className="w-100 mt-3" variant="outlined" />
          <TextField label="password" name="password" onChange={myhandler} className="w-100 mt-3" variant="outlined" />

          <input type="submit" className="btn btn-danger mt-4  form-control" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
