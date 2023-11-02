const colors = require('colors');

const tranquilo = (format) => {
  const createTranquiloMiddleware = (req, res, next) => {
    const start = process.hrtime();

    res.on('finish', () => {
      const end = process.hrtime(start);
      const responseTime = (end[0] * 1e3 + end[1] / 1e6).toFixed(3);
      const responseSize = res.get('Content-Length') || 0;
      const statusCode = res.statusCode;

      logRequest(req, statusCode, responseSize, responseTime, format);
    });

    next();
  };

  return createTranquiloMiddleware;
};

const logRequest = (req, statusCode, responseSize, responseTime, format) => {
  const statusCodeColored = code(statusCode);
  let logMessage;

  if (format === 'america') {
    logMessage =
      `${req.method} ${req.url} ${statusCode} ${responseSize} - ${responseTime}ms`
        .america;
  } else if (format === 'dev') {
    logMessage = `${req.method} ${req.url} ${statusCodeColored} ${responseTime}ms - ${responseSize}`;
  } else if (format === 'tiny') {
    logMessage = `${req.method} ${req.url} ${statusCode} ${responseSize} - ${responseTime}ms`;
  } else {
    logMessage = `${req.method} ${req.url} ${statusCodeColored} ${responseTime}ms - ${responseSize}`;
  }

  console.log(logMessage);
};

const code = (statusCode) => {
  switch (true) {
    case statusCode >= 200 && statusCode < 300:
      return `${statusCode}`.green;
    case statusCode >= 400 && statusCode < 500:
      return `${statusCode}`.yellow;
    case statusCode >= 500:
      return `${statusCode}`.red;
    default:
      return 'Unknown';
  }
};

module.exports = tranquilo;
