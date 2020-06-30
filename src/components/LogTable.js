import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./LogTable.css"
import moment from "moment";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBiking, faMale, faCar } from '@fortawesome/free-solid-svg-icons'
const nameMap = {
  user_name: 'Пользователь',
  type: 'На чём',
  time_stamp: 'Когда'
}
export const LogTable = () => {
  let [logs, setLogs] = useState([]);
  const getLogs = async () => {
    const response = await (await fetch(`https://mine-doors.herokuapp.com/logs`)).json();
    return response.map(({id, user_name, type, time_stamp}) => ({
      id, user_name, type, time_stamp
    }))
  }
  useEffect(() => {
    const getData = async () => {
      const data = await getLogs()
      setLogs(data);
    }
    getData();

  }, []);

  let cols = logs[0] && Object.keys(logs[0]);

  let headerRow =cols && cols
    .map(col => <th>{nameMap[col]}</th>)


  let rows = logs
    .map(row => {
      delete row.id
      let tds = cols.map(col => {
        if (col === 'time_stamp'){
          const time =  moment(row[col]).add(3, 'hours')
          return <td>{time.fromNow().includes('minutes') ? time.fromNow() : time.calendar(null, {
            lastDay : '[Yesterday at] HH:mm',
            sameDay : '[Today at] HH:mm',
            nextDay : '[Tomorrow at] HH:mm',
            lastWeek : '[last] dddd [at] HH:mm',
            nextWeek : 'dddd [at] HH:mm',
            sameElse : 'L'
          })}</td>
        }
        if (col ==='type'){
          let icon;
          switch (row[col]) {
            case 'car': {
              icon = <FontAwesomeIcon icon={faCar} />
              break;
            }
            case 'bike' :{
              icon = <FontAwesomeIcon icon={faBiking} />
              break;
            }
            case 'man' : {
              icon = <FontAwesomeIcon className={'white'} icon={faMale} />
              break;
            }
            default : {
              break;
            }

          }
          return <td>
            {icon}
          </td>
        }
        return <td>{row[col]}</td>
      });
      return <tr>{tds}</tr>;
    })



  return (
    <table className={'table table-dark'}>
      <thead>
      <tr>{headerRow}</tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>)
}

