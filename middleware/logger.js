const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const fileStreamRotator = require('file-stream-rotator');

const {APP_CONSTANT} = require('../resource/');

module.exports = (req, res, next) => {
  let logDirectory = path.join(process.cwd(), '/log');
  let accessLogStream;

  if (process.env.NODE_ENV === APP_CONSTANT.NODE_ENV.DEVELOPMENT) {
    return morgan('dev');
  }

  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

  accessLogStream = fileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: logDirectory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false,
  });

  return morgan('combined', {stream: accessLogStream});
};
