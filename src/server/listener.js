const DEFAULT_PORT = 3000;

const getPort = (process) => {
  if (!process || !process.env || !process.env.PORT) {
    return DEFAULT_PORT;
  }

  return process.env.PORT;
};

export default (app, process) => {
  const port = getPort(process);
  app.listen(port, () => console.log(`jacobclark.xyz is listening on port ${port}!`));
};
