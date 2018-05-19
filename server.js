process.once('uncaughtException', (err)=> {
  console.error('uncaughtException: %s, %s', err.message, (new Date).toUTCString());
  console.error(err.stack);
  process.exit(1);
});

function parseProcessArgv(results, val) {
  let arrArgument;

  if (typeof val !== 'string') {
    return results;
  }

  arrArgument = val.split('=');

  if (arrArgument.length !== 2) {
    return results;
  }

  results[arrArgument[0]] = arrArgument[1];

  return results;
}

const {createServer} = require('http');
const cluster = require('cluster');
const APP_ENVS = require('./resource/').APP_CONSTANT.NODE_ENV;
const config = require('./config');

const commandArgs = process.argv.reduce(parseProcessArgv, {});
process.env.NODE_ENV = process.env.NODE_ENV || APP_ENVS[process.env.NODE_ENV] || APP_ENVS[commandArgs.env] || APP_ENVS[commandArgs.profile] || 'production';
const httpPort = process.env.PORT || commandArgs.port || config[process.env.NODE_ENV].server.http.port || 5000;
const webFramework = require('./web-framework');

if (cluster.isMaster && process.env.NODE_ENV === APP_ENVS.PRODUCTION) {
  let workers = process.env.WORKERS || require('os').cpus().length;

  for (let i = 0; i < workers; i++) {
    cluster.fork().process;
  }

  cluster.on('exit', (worker, code, signal)=> cluster.fork());
} else {
  createServer(webFramework).listen(parseInt(httpPort, 10), ()=> {
    console.log('Http NodeJS Server is running on port ' + httpPort);

    if (process.send) {
      process.send('online');
    }
  });
}
