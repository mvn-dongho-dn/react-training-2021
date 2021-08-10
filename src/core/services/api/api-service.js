import { extend } from 'umi-request';
import { endpoint } from './api-endpoint';
// import interceptors from './api-interceptors';
const request = extend({
  prefix: 'http://localhost:8899/api/v1'
});

const ENDPOINT = endpoint;

class ApiService {
  /**
   * GET method
   * @param {*} uri : endpoint of api
   * @param {*} data : data send to server {}
   * @param {*} options : additional data from umi-request (https://github.com/umijs/umi-request)
   */
  get(uri, data = {}, options = {}) {
    const {url, queryOptions} = this._infoHandler(uri, data, options, 'GET');
    return request.get(url, queryOptions).catch((error) => {
      return this._errorHandler(error);
    });
  }

  /**
   * POST method
   * @param {*} uri : endpoint of api - String or Object EX: {endpoint: '/users/:id', id: '123'}
   * @param {*} data : data send to server {}
   * @param {*} options : additional data from umi-request (https://github.com/umijs/umi-request)
   */
  post(uri, data = {}, options = {}) {
    const {url, queryOptions} = this._infoHandler(uri, data, options);
    return request.post(url, queryOptions).catch((error) => {
      return this._errorHandler(error);
    });
  }

  /**
   * PUT method
   * @param {*} uri : endpoint of api - String or Object EX: {endpoint: '/users/:id', id: '123'}
   * @param {*} data : data send to server {}
   * @param {*} options : additional data from umi-request (https://github.com/umijs/umi-request)
   */
  put(uri, data = {}, options = {}) {
    const {url, queryOptions} = this._infoHandler(uri, data, options);
    return request.put(url, queryOptions).catch((error) => {
      return this._errorHandler(error);
    });
  }

  /**
   * PATCH method
   * @param {*} uri : endpoint of api - String or Object EX: {endpoint: '/users/:id', id: '123'}
   * @param {*} data : data send to server {}
   * @param {*} options : additional data from umi-request (https://github.com/umijs/umi-request)
   */
  patch(uri, data = {}, options = {}) {
    const {url, queryOptions} = this._infoHandler(uri, data, options);
    return request.patch(url, queryOptions).catch((error) => {
      return this._errorHandler(error);
    });
  }

  _infoHandler(uri, data = {}, options = {}, type = '') {
    let url = uri;
    if (typeof uri === 'object') {
      Object.keys(uri).forEach((e) => {
        url = uri.endpoint.replace(`:${e}`, uri[e]);
      });
    }
    if (new RegExp(/^http/).test(uri)) {
      options['prefix'] = '';
    }
    if (type === 'GET') {
      options['params'] = data;
    } else {
      options['data'] = data;
    }
    const queryOptions = options;
    return {url, queryOptions};
  }

  _errorHandler(error) {
    const codeMap = {
      '021': 'An error has occurred',
      '022': 'It’s a big mistake,',
      // ....
    };
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.data);
      console.log(error.request);
      console.log(codeMap[error.data.status]);
    } else {
      // The request was made but no response was received or error occurs when setting up the request.
      console.log(error.message);
    }
  
    throw error; // If throw. The error will continue to be thrown.
  
    // return {some: 'data'}; If return, return the value as a return. If you don't write it is equivalent to return undefined, you can judge whether the response has a value when processing the result.
    // return {some: 'data'};
  };
}

const apiService = new ApiService();
export {
  apiService,
  ENDPOINT
};
