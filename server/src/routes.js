import validateResource from "./middlewares/validateResource.js";

function routes(app) {
  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200);
  })
}

export default routes