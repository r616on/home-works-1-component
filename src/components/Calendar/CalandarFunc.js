import moment from "moment";

export default function CalandarFunc(data) {
  const dataMount = +data.month() + 1;
  const dataYear = +data.year();
  const dataNum = +data.date();
  const DayMonthAWeek = +data.day();
  let prevMonthStr = "";
  if (dataMount > 1) {
    prevMonthStr = `${dataYear}-${dataMount - 1}-10`;
  } else if (dataMount === 1) {
    prevMonthStr = `${dataYear - 1}-12-10`;
  }
  const firstDayMonthAWeek = +moment(`${dataYear}-${dataMount}-01`).day();
  const daysInMonth = +data.daysInMonth();
  const prvDaysInMonth = +moment(prevMonthStr).daysInMonth();
  const arrDay = [];
  for (let i = 0; i < 43; i++) {
    if (i < firstDayMonthAWeek - 1) {
      arrDay.push({
        value: +prvDaysInMonth - firstDayMonthAWeek + i + 2,
        className: "ui-datepicker-other-month",
      });
    } else if (
      i > firstDayMonthAWeek - 1 &&
      i < daysInMonth + firstDayMonthAWeek
    ) {
      if (i - (firstDayMonthAWeek - 1) === dataNum) {
        arrDay.push({
          value: i - firstDayMonthAWeek + 1,
          className: "ui-datepicker-today",
        });
      } else {
        arrDay.push({ value: i - firstDayMonthAWeek + 1 });
      }
    } else if (i > daysInMonth + firstDayMonthAWeek - 1) {
      arrDay.push({
        value: i - (daysInMonth + firstDayMonthAWeek) + 1,
        className: "ui-datepicker-other-month",
      });
    }
  }
  function nameDayOfWeek() {
    switch (DayMonthAWeek) {
      case 1:
        return "Понедельник";
      case 2:
        return "Вторник";
      case 3:
        return "Среда";
      case 4:
        return "Четверг";
      case 5:
        return "Пятница";
      case 6:
        return "Суббота";
      case 7:
        return "Воскресенье";
      default:
        return "Не определенно";
    }
  }
  function nameMountInRussuan() {
    switch (dataMount) {
      case 1:
        return { singular: "Январь", genitive: "Января" };
      case 2:
        return { singular: "Февраль", genitive: "Февраля" };
      case 3:
        return { singular: "Март", genitive: "Марта" };
      case 4:
        return { singular: "Апрель", genitive: "Апреля" };
      case 5:
        return { singular: "Май", genitive: "Мая" };
      case 6:
        return { singular: "Июнь", genitive: "Июня" };
      case 7:
        return { singular: "Июль", genitive: "Июля" };
      case 8:
        return { singular: "Август", genitive: "Августа" };
      case 9:
        return { singular: "Сентябрь", genitive: "Сентября" };
      case 10:
        return { singular: "Октябрь", genitive: "Октября" };
      case 11:
        return { singular: "Ноябрь", genitive: "Ноября" };
      case 12:
        return { singular: "Декабрь", genitive: "Декабря" };
      default:
        return { singular: "Не определенно", genitive: "Не определенно" };
    }
  }
  return {
    arr: arrDay,
    day: +dataNum,
    year: dataYear,
    mounthRussuan: nameMountInRussuan(),
    nameDayOfWeek: nameDayOfWeek(),
  };
}
