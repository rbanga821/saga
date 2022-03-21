import _ from 'lodash';
class ApiRequest {
  static headers() {
    let headers = {'Content-Type': 'application/json'};
    return headers;
  }

 static fetch(options) {
     let fetchOptions = {
       method: options.method,
     };

     fetchOptions.headers = _.merge(this.headers(), options.headers);
    console.log('apiiiiireq----->' + JSON.stringify(options));

    return fetch(options.url, fetchOptions)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(error => {
        console.error(error);
      });

    // let fetchOptions = {
    //   method: options.method
    // };

    // fetchOptions.headers = _.merge(this.headers(), options.headers);

    // if (options.method === 'get' || options.method === 'GET') {
    //         // console.log('apiiiiireq-----tt>' + JSON.stringify(options));

    //   fetchOptions.search = new URLSearchParams(options.params);
    // } else {
    //         console.log('apiiiiireq----->yyyy' + JSON.stringify(options));

    //   fetchOptions.body = JSON.stringify(options.data);
    // }
    //           fetchOptions.search = new URLSearchParams(options.params);
    //  console.log('apiiiiireq----->' + JSON.stringify(fetchOptions));
    // return fetch(options.url, fetchOptions)
    //   .then(response =>
    //     response.json().then(
    //       json => (
    //         console.log('apiiiiireq----->ooooo' + JSON.stringify(response)),
    //         {
    //           headers: response.headers.map,
    //           status: response.status,
    //           data: json,
    //         }
    //       ),
    //     ),
    //   )
    //   .then(response => response)
    //   .then(response => {
    //                 console.log(
    //                   'responseresponse----->ooooo' + JSON.stringify(response),
    //                 );

    //     return response;
    //   })
    //   .catch(errorResponse => {
    //     throw errorResponse;
    //   });
  }
}

export {ApiRequest};
