import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './Form.css';
import Swal from 'sweetalert2';

const Registration = () => {
  const [Data, setData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: true,
  });
  const mynav = useNavigate();

  const myhandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const mysubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/accounts/register', Data)
      .then((e) => {
        console.log(e.data);
        Swal.fire('Registration successful!', 'Your Registration has been successfully completed.', 'success');
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };
  const goRegistration = (e) => {
    mynav('/login');
  };

  return (
    <div id="bg" className="Registration">
      <div className="midd toop  p-4 ">
        <form onSubmit={mysubmit}>
          <h1 className="text-center  bg-light  p-2 rounded-2  mb-4 headerr">Registration</h1>

          <TextField label="title" name="title" onChange={myhandler} className="w-100 mt-3" variant="outlined" />
          <TextField
            label="firstName"
            name="firstName"
            onChange={myhandler}
            className="w-100 mt-3"
            variant="outlined"
          />
          <TextField label="lastName" name="lastName" onChange={myhandler} className="w-100 mt-3" variant="outlined" />
          <TextField label="email" name="email" onChange={myhandler} className="w-100 mt-3" variant="outlined" />
          <TextField label="password" name="password" onChange={myhandler} className="w-100 mt-3" variant="outlined" />
          <TextField
            label="confirmPassword"
            name="confirmPassword"
            onChange={myhandler}
            className="w-100 mt-3"
            variant="outlined"
          />

          <input type="submit" className="btn btn-danger mt-4  form-control" value="Submit" />
        </form>
        <hr className="mt-4" />
        <p className="text-center">
          Have already an account?
          <span>
            <button className="Singup" onClick={goRegistration}>
              Sing-In!
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
