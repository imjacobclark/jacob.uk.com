export default class {
  constructor({
    app, express, react, reactDOMServer, render,
  } = {}) {
    this.express = express || require('express');
    this.react = react || require('react');
    this.reactDOMServer = reactDOMServer || require('react-dom/server');

    this.render = render || require('./RenderApp.jsx').default(this);

    this.app = app || require('./server/index').default(this);

    this.process = process;
  }

  getApp() {
    return this.app;
  }

  getProcess() {
    return this.process;
  }

  getExpress() {
    return this.express;
  }

  getReact() {
    return this.react;
  }

  getReactDOMServer() {
    return this.reactDOMServer;
  }

  getRender() {
    return this.render;
  }
}
