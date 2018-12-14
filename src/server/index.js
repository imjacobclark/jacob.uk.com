export default (dependencies) => {
  const express = dependencies.getExpress();
  const app = express();

  app.use(express.static('./dist'));

  app.get('*', (req, res) => {
    const html = dependencies.getRenderer()(req.url);
    res.send(html);
  });

  return app;
};
