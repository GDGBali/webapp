import format from 'date-fns/format';

import addMinutes from 'date-fns/add_minutes';
import subMinutes from 'date-fns/sub_minutes';

const formatDate = date => {
  const gmt8Offset = 480;
  const offset = new Date(date).getTimezoneOffset();

  const utcTime =
    Math.sign(offset) !== -1
      ? addMinutes(date, offset)
      : subMinutes(date, Math.abs(offset));

  const getTime = addMinutes(utcTime, gmt8Offset);
  const hours = format(getTime, 'HH');
  const minutes = format(getTime, 'mm');
  const HHmm = `${hours}:${minutes}`;

  return {
    hours,
    minutes,
    HHmm,
  };
};

export default formatDate;
