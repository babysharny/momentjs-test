var moment = require('moment');
require('moment/locale/ru');
var date = moment(new Date()).format('DD-MM-YYYY');
console.info(date);
var seconds = moment.unix(63*60+34).utc().format('DD-MM-YYYY h:mm:ss');
console.info(seconds);