import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

export default (app) => {
    const webpackConfig = require('./webpack.config.dev')[0];

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {}));
}