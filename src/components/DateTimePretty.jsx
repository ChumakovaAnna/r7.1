import React from 'react';
import dayjs from 'dayjs';
import DateTime from "./DateTime"

export default function DateTimePretty({date}) {
  const oldDate = dayjs(date);
  const nowDate = dayjs();
  let durationString = "";
  console.log(nowDate.diff(oldDate, 'd') > 365);

  if (nowDate.diff(oldDate, 'h') === 0) {
    console.log(`${nowDate.diff(oldDate, 'm')} минут назад`)
    durationString = `${nowDate.diff(oldDate, 'm')} минут назад`;
  } else if (nowDate.diff(oldDate, 'h') > 24 && nowDate.diff(oldDate, 'd') < 365) {
    durationString = `${nowDate.diff(oldDate, 'd')} дней назад`;
  } else if (nowDate.diff(oldDate, 'd') > 365) {
    durationString = `${nowDate.diff(oldDate, 'y')} лет назад`;
  } else {
    durationString = `${nowDate.diff(oldDate, 'h')} часов назад`;
  }

  return <DateTime date={durationString}></DateTime>
}