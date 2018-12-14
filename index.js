import listener from './src/server/listener';
import Dependencies from './src/server/Dependencies';

const dependencies = new Dependencies();

listener(dependencies);