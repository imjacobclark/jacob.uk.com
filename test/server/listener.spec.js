import listener from '../../src/server/listener';
import Dependencies from '../../src/Dependencies';

const getDependencies = () => {
  const mockApp = {
    listen: jest.fn(),
  };

  return new Dependencies(mockApp)
}

describe('Listener', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should spawn a new server on port 3000 when process is not defined', () => {
    const dependencies = getDependencies();

    listener(dependencies);

    expect(dependencies.getApp().listen).toBeCalledWith(3000, expect.any(Function));
  });

  it('should spawn a new server on port 3000 when process.env is not defined', () => {
    const dependencies = getDependencies();
    process.env = {};

    listener(dependencies);

    expect(dependencies.getApp().listen).toBeCalledWith(3000, expect.any(Function));
  });

  it('should spawn a new server on port 3000 when process.env.PORT is not specified', () => {
    const dependencies = getDependencies();
    process.env = {};

    listener(dependencies);

    expect(dependencies.getApp().listen).toBeCalledWith(3000, expect.any(Function));
  });

  it('should spawn a new server on port 8080 when process.env.PORT is specified', () => {
    const dependencies = getDependencies();
    process.env = {
      "PORT": 8080
    };

    listener(dependencies);

    expect(dependencies.getApp().listen).toBeCalledWith(8080, expect.any(Function));
  });

  it('should log out port 8080 when process.env.PORT is specified', (done) => {
    const mockApp = {
      listen: (port, callback) => {
        jest.spyOn(global.console, 'log');

        callback();

        expect(console.log).toHaveBeenCalledWith('jacobclark.xyz is listening on port 8080!');
        done();
      },
    };

    const dependencies = new Dependencies(mockApp);

    process.env = {
      "PORT": 8080
    };

    listener(dependencies);
  });

  it('should log out port 3000 when process.env.PORT is not specified', (done) => {
    const mockApp = {
      listen: (port, callback) => {
        jest.spyOn(global.console, 'log');

        callback();

        expect(console.log).toHaveBeenCalledWith('jacobclark.xyz is listening on port 3000!');
        done();
      },
    };

    const dependencies = new Dependencies(mockApp);

    process.env = {};

    listener(dependencies);
  });

  it('should log out port 3000 when process.env is not defined', (done) => {
    const mockApp = {
      listen: (port, callback) => {
        jest.spyOn(global.console, 'log');

        callback();

        expect(console.log).toHaveBeenCalledWith('jacobclark.xyz is listening on port 3000!');
        done();
      },
    };

    const dependencies = new Dependencies(mockApp);

    process.env = {};

    listener(dependencies);
  });
});
