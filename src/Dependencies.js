export default class {
    constructor({app, express, react, reactDOMServer} = {}){
        this.express = express ? express : require('express');
        this.react = react ? react : require('react');
        this.reactDOMServer = reactDOMServer ? reactDOMServer : require('react-dom/server');

        this.app = app ? app : require('./server/index').default(this);

        this.process = process;
    }

    getApp(){
        return this.app;
    }

    getProcess() {
        return this.process;
    }

    getExpress(){
        return this.express;
    }

    getReact(){
        return this.react;
    }

    getReactDOMServer() {
        return this.reactDOMServer;
    }
}