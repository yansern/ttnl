const server = require('./build/server.js').server;

server({
  port: process.env.PORT
});
