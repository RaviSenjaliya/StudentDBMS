import { React, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import Swal from 'sweetalert2';

const Login = () => {
  const [Data, setData] = useState({
    email: '',
    password: '',
  });
  const mynav = useNavigate();

  const myhandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const goRegistration = (e) => {
    mynav('/registration');
  };

  const mysub = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/accounts/authenticate', Data)
      .then((y) => {
        console.log(y);
        localStorage.setItem('ERPdata', JSON.stringify(y.data));
        mynav('/dashboard/app');
      })
      .catch((y) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };
  return (
    <div id="bg" className="log-in">
      <div className="midd toop   p-4">
        <form onSubmit={mysub}>
          <h1 className="text-center  bg-light  p-2 rounded-2  mb-4 headerr">Sing-In</h1>

          <TextField label="email" name="email" onChange={myhandler} className="w-100 mt-3" variant="outlined" />
          <TextField label="password" name="password" onChange={myhandler} className="w-100 mt-3" variant="outlined" />

          <input type="submit" className="btn btn-danger mt-4  form-control" value="Submit" />
        </form>
        <hr className="mt-4" />
        <p className="text-center">
          Don't have an account yet?
          <span>
            <button className="Singup" onClick={goRegistration}>
              Registration!
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
