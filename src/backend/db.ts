// Our API for demos only
var request = require('request');

export const fakeDataBase = {
  get() {
    let baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core';
    let options = {
        url: baseUrl,
        headers: {
          'User-Agent': 'kendoui',
          'Authorization': "token 51bd04fc" +"379eb9d4e1d88637acfde27e445b7161"
        }
      }
      const total = new Promise(function (resolve, reject) {
        request(options, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            resolve(JSON.parse(body).open_issues_count)
          } else {
            reject(error)
          }
        })
      })


      const issues = new Promise(function (resolve, reject) {
        options.url += '/issues?state=all&page=1&per_page=10';
        request(options, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            resolve(JSON.parse(body))
          } else {
            reject(error)
          }
        })
      })
    return Promise.all([total, issues]);
  }
};
