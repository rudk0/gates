import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import './Page.css';



function Page() {
  let [state, setState] = useState();
  let password = '';
  let name = '';
  const lsCheck = () =>{
    if (localStorage.getItem('password')) {
      password = localStorage.getItem('password')
    } else {
      password = prompt('Введите пароль:');
      if (password != null) {
        localStorage.setItem('password', password);
      }
    }
    ;
    if (localStorage.getItem('name')) {
      name = localStorage.getItem('name')
    } else {
      name = prompt('Введите имя:');
      if (name != null) {
        localStorage.setItem('name', name);
      }
    }
    ;
  }
    const handleCarClick = () => {
    lsCheck();
    fetch('https://mine-doors.herokuapp.com/mobile/car', {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Basic ${password}.${name}`
      })
    })
      .then(response => {
        if (response.status === 200) {
          setState('OK')
        } else {
          setState('Something went wrong')
          localStorage.clear();
        }
      })
      .catch(e => setState("Что-то не так с сервером или нет интернета")
      )

  }
  const handleBicycleClick = () => {
   lsCheck();
    fetch('https://mine-doors.herokuapp.com/mobile/bike', {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Basic ${password}.${name}`
      })
    })
      .then(response => {
        if (response.status === 200) {
          setState('OK')
        } else {
          setState('Something went wrong')
          localStorage.clear();
        }
      })
      .catch(e => setState("Что-то не так с сервером или нет интернета")
      )
  }

  const handlePersonClick = () => {
    lsCheck();
    fetch('https://mine-doors.herokuapp.com/mobile/man', {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Basic ${password}.${name}`
      })
    })
      .then(response => {
        if (response.status === 200) {
          setState('OK')
        } else {
          setState('Something went wrong')
          localStorage.clear();
        }
      })
      .catch(e => setState("Что-то не так с сервером или нет интернета")
      )
  }

  console.log(state);


  return (
    <div className="page">
      {state && <div className={`alert blue alert-warning`}>{state}</div>}
      <div className={'buttons'}>
        <button className="btn btn2 btn-dark" onClick={() => handleBicycleClick()}>🚲</button>
        <button className="btn btn3 btn-dark" onClick={() => handlePersonClick()}>🚶🏻</button>
      </div>
      <button className="btn btn1 btn-dark" onClick={() => handleCarClick()}>🚗</button>
    </div>
  );



}
export default Page;
