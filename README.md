# Tranquilo - Express.js HTTP Middleware Logger

[![npm](https://img.shields.io/npm/v/tranquilo?style=for-the-badge)](https://www.npmjs.com/package/tranquilo)
[![GitHub](https://img.shields.io/github/v/release/JordanVera/tranquilo?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JordanVera/tranquilo)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.jordanvera.com)

Welcome to Tranquilo, the Middleware Logger for Express.js, a powerful tool to streamline and enhance the logging of HTTP requests and responses in your Express.js applications.

Logging is an essential aspect of understanding your application's behavior, diagnosing issues, and monitoring performance. Our middleware logger offers a user-friendly solution that allows you to easily track request and response details, response time, and status codes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Custom Configuration](#custom-configuration)
- [Examples](#examples)
- [Available Format Strings](#available-format-strings)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install Tranquilo with npm

```bash
  npm install tranquilo
```

## Usage

Integrate Tranquilo into your Express.js application:

```javascript
const express = require('express');
const tranquilo = require('tranquilo');

const app = express();

app.use(tranquilo());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## Custom Configuration

Tranquilo supports various format strings for customizing the logged output. You can specify a format string when initializing the middleware. Available format strings include:

- **America**: A custom format for American-style logging.

- **Dev**: Development-friendly format with colored status codes.

- **Tiny**: A minimal format with essential request and response details.

Example of using a custom format:

```javascript
app.use(tranquilo('america'));
```

## Features

- **_Effortless Logging:_** Streamline the process of logging HTTP requests and responses in your Express.js application with minimal setup.
- **_Detailed Insights:_** Gain in-depth insights into request methods, URLs, status codes, response times, and content size for each API call.
- **_Custom Configuration:_** Tailor the logger to your needs with customizable options to log specific information and control the verbosity of logs.
- **_Seamless Integration:_** Easily integrate the middleware logger into your existing Express.js projects, improving your debugging and monitoring capabilities instantly.

## Contributing

We welcome contributions from the open-source community. If you have ideas, bug reports, or feature requests, please open an issue on the [GitHub repository](https://github.com/JordanVera/tranquilo).
