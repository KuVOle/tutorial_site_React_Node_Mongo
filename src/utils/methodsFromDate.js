export const getFullDayName = (getDay) => {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return days[getDay];
};

export const getCurrntDate = (dateString) => {
  const dateExample = new Date(Date.parse(dateString) - 100);
  const date = { day: null, month: null, year: null, dayOfTheWeek: null };
  dateExample.getDate() < 10
    ? (date.day = "0" + dateExample.getDate())
    : (date.day = dateExample.getDate());

  dateExample.getMonth() < 9
    ? (date.month = "0" + (dateExample.getMonth() + 1))
    : (date.month = dateExample.getMonth() + 1);

  date.year = dateExample.getFullYear();
  date.dayOfTheWeek = getFullDayName(dateExample.getDay());
  return date;
};
