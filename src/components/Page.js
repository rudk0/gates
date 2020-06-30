import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import './Page.css';
import axios from "axios";


function Page() {
  let [state, setState] = useState('');
  let password = '';
  let name = '';
  const lsCheck = () => {
    if (localStorage.getItem('password')) {
      password = localStorage.getItem('password')
    } else {
      password = prompt('Введите пароль:');
      if (password != null) {
        localStorage.setItem('password', password);
      }
    }
    if (localStorage.getItem('name')) {
      name = localStorage.getItem('name')
    } else {
      name = prompt('Введите имя:');
      if (name != null) {
        localStorage.setItem('name', name);
      }
    }
  }
  lsCheck();
  const handleClick = (type) => {
    //lsCheck()
    const headers = {
      authorization: 'Basic ' + password + '.' + name
    }
    setState(JSON.stringify(headers))
    axios({
      url: 'https://mine-doors.herokuapp.com/mobile/' + type + '/',
      method: 'get',
      headers: {
        authorization: 'Basic '  + password + '.' + name
      }
    })
      .then(response => {
        if (response.status === 200) {
          setState('OK')
        } else {
          setState('Something went wrong')
          localStorage.clear();
        }
      })
      .catch(e => {
        localStorage.clear();
        setState(e.message)
        }
      )
  }

  console.log(state);


  return (
    <div className="page">
      {state && <div className={`alert blue alert-warning`}>{state}</div>}
      <div className={'buttons'}>
        <button className="btn btn2 btn-dark" onClick={() => handleClick('bike')}>🚲<div className={'bg'}>🚲</div></button>
        <button className="btn btn3 btn-dark" onClick={() => handleClick('man')}><div className={'bg'}></div></button>
      </div>
      <button className="btn btn1 btn-dark" onClick={() => handleClick('car')}><div className={'bg'}>🚗</div></button>
    </div>
  );



}
export default Page;
