import app from '.'

const DEFAULT_PORT = 3000;

const getPort = process => {
    if (!process.env)  {
        return DEFAULT_PORT;
    }

    return process.env.PORT || DEFAULT_PORT
}

export default (appDependency = app, processDependency = process) => {
    const port = getPort(processDependency);
    appDependency.listen(port, () => console.log(`jacobclark.xyz is listening on port ${port}!`))
};