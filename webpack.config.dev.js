const path = require('path');

const client = {
    entry: './src/client/index.jsx',
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
};


const server = {
    entry: './index.js',
    mode: "production",
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
};

const lambda = {
    entry: './src/server/lambda/handler.js',
    mode: "production",
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lambda.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
};

module.exports = [client, server, lambda];