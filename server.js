const express = require('express');
const router = require('./routes/api')
const apiErrorHandler = require('./App/error/api-error-handler');

const app = express();

app.use(express.json());
app.use(router);
app.use(apiErrorHandler);

app.listen(8080, () => console.log('Server listening on port 8080'));