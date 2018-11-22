import app from './src/server'

export default (appDependency = app, processDependency = process) => {
    const port = processDependency.env.PORT || 3000;
    appDependency.listen(port, () => console.log(`jacobclark.xyz is listening on port ${port}!`))
};