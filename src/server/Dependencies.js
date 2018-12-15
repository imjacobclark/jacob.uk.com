export default class {
  constructor({
    app, express, react, reactDOMServer, renderer, reactRouterDom, AppComponent,
  } = {}) {
    this.express = express || require('express');
    this.react = react || require('react');
    this.reactDOMServer = reactDOMServer || require('react-dom/server');
    this.reactRouterDom = reactRouterDom || require('react-router-dom');

    this.AppComponent = AppComponent || require('../components/App.jsx').default;
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

  getReactRouterDom() {
    return this.reactRouterDom;
  }

  getAppComponent() {
    return this.AppComponent;
  }

  getRenderer() {
    return this.renderer;
  }
}
