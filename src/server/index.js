export default (dependencies) => {
  const express = dependencies.getExpress();
  const app = express();

  const html = dependencies.getRender()();

  app.get('/', (req, res) => res.send(html));

  return app;
};
