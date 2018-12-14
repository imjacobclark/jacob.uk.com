export default (dependencies) => {
  const express = dependencies.getExpress();
  const app = express();

  app.use(express.static('./dist'));

  const html = dependencies.getRenderer()();

  app.get('/', (req, res) => res.send(html));

  return app;
};
