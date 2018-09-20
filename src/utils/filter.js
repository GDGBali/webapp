import Vue from 'vue';
import format from 'date-fns/format';
import idLocale from 'date-fns/locale/id';

Vue.filter('date', value => {
  return format(value, 'D MMMM YYYY', { locale: idLocale });
});
