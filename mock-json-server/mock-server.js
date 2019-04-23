/* eslint-disable no-console */

// This is responsible to create the mock server.
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
// Use here your fake data file.

server.use(middlewares);
server.use(jsonServer.bodyParser);

// server.put('/v1/admin', (req, res) => {
//   adminConfig = mockFile.setGlobalConfig(req.body);
//   send(() => res.sendStatus(200));
// });

server.listen(3000, () => {
  console.log('JSON Server is running');
});
