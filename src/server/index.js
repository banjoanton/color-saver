const http = require('http');
const app = require('./app');
require('dotenv').config();

const server = http.createServer(app);

server.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on port ${process.env.PORT || 8080}`);
});
