const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
 response.send('Welcome to MILA University!');
});

app.listen(PORT, () => {
 console.log(`Server is successfully running on port ${PORT}`);
});