# HTTP Middleware Logger for Express.js

Welcome to Tranquilo, the Middleware Logger for Express.js, a powerful tool to streamline and enhance the logging of HTTP requests and responses in your Express.js applications.

Logging is an essential aspect of understanding your application's behavior, diagnosing issues, and monitoring performance. Our middleware logger offers a user-friendly solution that allows you to easily track request and response details, response time, and status codes.

## Examples

Install tranquilo with npm.

```bash
npm i tranquilo
```

Then inside your project require and use tranquilo as early as possible

```javascript
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('hello, world!');
});
```

## Features

- **_Effortless Logging:_** Streamline the process of logging HTTP requests and responses in your Express.js application with minimal setup.
- **_Detailed Insights:_** Gain in-depth insights into request methods, URLs, status codes, response times, and content size for each API call.
- **_Custom Configuration:_** Tailor the logger to your needs with customizable options to log specific information and control the verbosity of logs.
- **_Seamless Integration:_** Easily integrate the middleware logger into your existing Express.js projects, improving your debugging and monitoring capabilities instantly.

## Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.jordanvera.com)
