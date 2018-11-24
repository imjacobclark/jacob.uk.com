const DEFAULT_PORT = 3000;

const getPortNumber = process => {
  if (!process || !process.env || !process.env.PORT) {
    return DEFAULT_PORT;
  }

  return process.env.PORT;
};

export default dependencies => {
  const app = dependencies.getApp();
  const process = dependencies.getProcess();
  
  const port = getPortNumber(process);

  app.listen(port, () => console.log(`jacobclark.xyz is listening on port ${port}!`));
};
