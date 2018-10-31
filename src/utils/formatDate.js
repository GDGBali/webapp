import format from 'date-fns/format';

const formatDate = date => {
  const hours = format(date, 'HH');
  const minutes = format(date, 'mm');
  const HHmm = `${hours}:${minutes}`;

  return {
    hours,
    minutes,
    HHmm,
  };
};

export default formatDate;
