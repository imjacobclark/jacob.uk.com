export default class {
    constructor(app){
        this.app = app ? app : require('./server/index').default;
        this.process = process;
    }

    getApp(){
        return this.app;
    }

    getProcess() {
        return this.process;
    }
}