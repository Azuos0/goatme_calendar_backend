export const getSameWeekDayDateFromMonth = (m: number, y: number, weekDay: number) => {
  const days = new Date(y, m, 0).getDate();
  const firstWeekDay = new Date(m + '/01/' + y).getDay();

  const datesOfWeekDay = [];
  let firstDate;

  weekDay < firstWeekDay
    ? firstDate = (8 + weekDay) - firstWeekDay
    : firstDate = (weekDay - firstWeekDay) + 1;

  datesOfWeekDay.push(`${y}-${m > 9 ? m : '0' + m}-${firstDate > 9 ? firstDate : '0' + firstDate}`);

  for (let i = firstDate + 7; i <= days; i += 7) {
    datesOfWeekDay.push(`${y}-${m > 9 ? m : '0' + m}-${i > 9 ? i : '0' + i}`);
  }
  return datesOfWeekDay;
}

export const getDatesInsideInterval = (start: Date, end: Date, dates: string[]): string[] => {
  const startInMilis = start.getTime();
  const endInMilis = end.getTime();
  return dates.filter(date => {
    const dateInMilis = convertStringDateToDate(date).getTime();
    return dateInMilis >= startInMilis && dateInMilis <= endInMilis;
  });
}

export const convertStringDateToDate = (date: string): Date => {
  const dateArray = date.split('-');
  return new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]))
}

