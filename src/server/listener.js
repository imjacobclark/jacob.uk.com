const DEFAULT_PORT = 3000;

const getPortNumber = process => ((!process || !process.env || !process.env.PORT) ? DEFAULT_PORT : process.env.PORT);

export default (dependencies) => {
  const app = dependencies.getApp();
  const process = dependencies.getProcess();

  const port = getPortNumber(process);

  app.listen(port, () => console.log(`jacobclark.xyz is listening on port ${port}!`)); // eslint-disable-line no-console
};
