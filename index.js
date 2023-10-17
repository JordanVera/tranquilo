const { green, yellow, red, gray } = require('chalk');

const createTranquiloMiddleware = (format) => {
  const tranquilo = (req, res, next) => {
    switch (format) {
      case 'dev':
        return devFormat(req, res, next);
      case 'tiny':
        return tinyFormat(req, res, next);
      default:
        return devFormat(req, res, next);
    }
  };

  return tranquilo;
};

const devFormat = (req, res, next) => {
  const start = process.hrtime();

  res.on('finish', () => {
    const end = process.hrtime(start);
    const responseTime = (end[0] * 1e3 + end[1] / 1e6).toFixed(3);
    const responseSize = res.get('Content-Length') || 0;
    const statusCode = res.statusCode;

    const code = () => {
      switch (true) {
        case statusCode >= 200 && statusCode < 300:
          return green(statusCode);
        case statusCode >= 400 && statusCode < 500:
          return yellow(statusCode);
        case statusCode >= 500:
          return red(statusCode);
        default:
          return gray('Unknown');
      }
    };

    console.log(
      `${req.method} ${req.url} ${code()} ${responseTime}ms - ${responseSize}`
    );
  });

  next();
};

const tinyFormat = (req, res, next) => {
  console.log('tinyyyyyyyy');

  next();
};

module.exports = createTranquiloMiddleware;
