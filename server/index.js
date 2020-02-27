const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    // next delegates routing to express
    const server = express();

    // custom routes

    // when user starts at dynamic page vs navigating there
    server.get('/users/profile/:id', (req, res) => {
      const actualPage = '/users/profile';
      const queryParams = { userId: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      // next handles remaining routes
      handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> ready on port http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
