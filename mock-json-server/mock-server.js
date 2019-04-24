/* eslint-disable no-console */

// This is responsible to create the mock server.
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
// Use here your fake data file.

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/test', (req, res) => {
  console.log(req.body);
  const body = req.body;

  res.jsonp({
    thing_1: body.thing_1,
    thing_2: body.thing_2,
    thing_3: {
      constant_thing: body.thing_3.constant_thing,
    }
  });
  // res.sendStatus(200);
});

server.listen(3000, () => {
  console.log('JSON Server is running');
});
