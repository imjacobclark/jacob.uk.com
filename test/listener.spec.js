import listener from '../listener';

describe('Listener', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should spawn a new server on port 3000 when process.env.PORT is not specified', () => {
        const mockApp = {
            listen: jest.fn()
        }

        const mockProcess = { 
            "env": {} 
        }

        listener(mockApp, mockProcess);

        expect(mockApp.listen).toBeCalledWith(3000, expect.any(Function));
    });

    it('should spawn a new server on port 8080 when process.env.PORT is specified', () => {
        const mockApp = {
            listen: jest.fn()
        }

        const mockProcess = {
            "env": {
                "PORT":  8080
            }
        }

        listener(mockApp, mockProcess);

        expect(mockApp.listen).toBeCalledWith(8080, expect.any(Function));
    });
});