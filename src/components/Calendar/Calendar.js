import React from "react";
import PropTypes from "prop-types";
import "./desktop.css";
import CalandarFunc from "./CalandarFunc";

function Calendar(props) {
  const arrDay = CalandarFunc(props.date);
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{arrDay.nameDayOfWeek}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{arrDay.day}</div>
          <div className="ui-datepicker-material-month">
            {arrDay.mounthRussuan.genitive}
          </div>
          <div className="ui-datepicker-material-year">{arrDay.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {arrDay.mounthRussuan.singular}
          </span>
          &nbsp;
          <span className="ui-datepicker-year"> {arrDay.year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {arrDay.arr.map((item, index) => {
              if (index < 7) {
                return (
                  <td key={item.value} className={item.className}>
                    {item.value}
                  </td>
                );
              } else {
                return false;
              }
            })}
          </tr>
          <tr>
            {arrDay.arr.map((item, index) => {
              if (index > 6 && index < 14) {
                return (
                  <td key={item.value} className={item.className}>
                    {item.value}
                  </td>
                );
              } else {
                return false;
              }
            })}
          </tr>
          <tr>
            {arrDay.arr.map((item, index) => {
              if (index > 13 && index < 21) {
                return (
                  <td key={item.value} className={item.className}>
                    {item.value}
                  </td>
                );
              } else {
                return false;
              }
            })}
          </tr>
          <tr>
            {arrDay.arr.map((item, index) => {
              if (index > 20 && index < 28) {
                return (
                  <td key={item.value} className={item.className}>
                    {item.value}
                  </td>
                );
              } else {
                return false;
              }
            })}
          </tr>
          <tr>
            {arrDay.arr.map((item, index) => {
              if (index > 27 && index < 35) {
                return (
                  <td key={item.value} className={item.className}>
                    {item.value}
                  </td>
                );
              } else {
                return false;
              }
            })}
          </tr>
          <tr>
            {arrDay.arr.map((item, index) => {
              if (index > 34 && index < 42) {
                return (
                  <td key={item.value} className={item.className}>
                    {item.value}
                  </td>
                );
              } else {
                return false;
              }
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Calendar.defaultProps = {
  date: {
    arr: "",
    day: "0",
    year: "",
    mounthRussuan: "",
    nameDayOfWeek: "",
  },
};

Calendar.propTypes = {
  date: PropTypes.shape({
    arr: PropTypes.array,
    day: PropTypes.func,
    year: PropTypes.func,
    mounthRussuan: PropTypes.func,
    nameDayOfWeek: PropTypes.func,
  }),
};

export default Calendar;
