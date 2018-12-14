export default class {
  constructor({
    app, express, react, reactDOMServer, renderer,
  } = {}) {
    this.express = express || require('express');
    this.react = react || require('react');
    this.reactDOMServer = reactDOMServer || require('react-dom/server');

    this.renderer = renderer || require('./renderer/index.jsx').default(this);

    this.app = app || require('./').default(this);

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

  getRenderer() {
    return this.renderer;
  }
}
