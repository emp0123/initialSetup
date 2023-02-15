const log4js = require('log4js');
log4js.configure({
  disableClustering: true,
  appenders: {
    console: {
      type: 'console',
    },
    cheese: {
      type: 'file',
      filename: './logs/zampliasurveys.log',
      maxLogSize: 1024000,
      backups: 3,
      compress: true,
    },
    layout: {
      type: 'pattern',
      pattern: '%x{ln} %-5p %m',
    },
  },
  categories: {
    default: { appenders: ['console', 'cheese'], level: 'info' },
  },
});

module.exports = log4js;
