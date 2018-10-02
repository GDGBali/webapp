import Vue from 'vue';
import format from 'date-fns/format';
import idLocale from 'date-fns/locale/id';

const formatDate = (value, withTime = false) =>
  format(value, `DD MMMM YYYY${withTime ? ' HH:mm' : ''}`, {
    locale: idLocale,
  });

Vue.filter('date', value => formatDate(value));

Vue.filter('dateTime', value => formatDate(value, true));
