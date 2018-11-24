import listener from './src/server/listener';
import Dependencies from './src/Dependencies';

const dependencies = new Dependencies();

listener(dependencies);