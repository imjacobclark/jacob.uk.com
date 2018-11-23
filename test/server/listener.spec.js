import listener from '../../src/server/listener';

describe('Listener', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should spawn a new server on port 3000 when process is not defined', () => {
    const mockApp = {
      listen: jest.fn(),
    };

    listener(mockApp);

    expect(mockApp.listen).toBeCalledWith(3000, expect.any(Function));
  });

  it('should spawn a new server on port 3000 when process.env is not defined', () => {
    const mockApp = {
      listen: jest.fn(),
    };

    const mockProcess = {
      env: {},
    };

    listener(mockApp, mockProcess);

    expect(mockApp.listen).toBeCalledWith(3000, expect.any(Function));
  });

  it('should spawn a new server on port 3000 when process.env.PORT is not specified', () => {
    const mockApp = {
      listen: jest.fn(),
    };

    const mockProcess = {
      env: {},
    };

    listener(mockApp, mockProcess);

    expect(mockApp.listen).toBeCalledWith(3000, expect.any(Function));
  });

  it('should spawn a new server on port 8080 when process.env.PORT is specified', () => {
    const mockApp = {
      listen: jest.fn(),
    };

    const mockProcess = {
      env: {
        PORT: 8080,
      },
    };

    listener(mockApp, mockProcess);

    expect(mockApp.listen).toBeCalledWith(8080, expect.any(Function));
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

    const mockProcess = {
      env: {
        PORT: 8080,
      },
    };

    listener(mockApp, mockProcess);
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

    const mockProcess = {
      env: {
      },
    };

    listener(mockApp, mockProcess);
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

    const mockProcess = {
    };

    listener(mockApp, mockProcess);
  });
});
