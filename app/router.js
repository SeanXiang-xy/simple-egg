const Router = require('koa-router');

module.exports = app => {
  const router = new Router();
  const { home } = app.controller;

  router.get('/', async (ctx) => {
    const context = new app.context(ctx);
    await home.index(context);
  });

  return router;
};