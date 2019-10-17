let async = require('async');
let axios = require('axios');
let fs = require('fs');

let search = query => {
  return new Promise((resolve, reject) => {
    return axios({
      method: 'get',
      url: 'https://google.com/search',
      params: { q: query }
    }).then(re => {
      return resolve(re.data);
    }).catch(er => {
      return reject(er);
    });
  })
}

let getSearchStatistic = (arr, filepath) => {
  return new Promise((resolve, reject) => {
    let statistic = {}
    async.eachOfSeries(arr, (item, index, callback) => {
      console.log('Processed:', index);
      search(item).then(re => {
        if (!statistic[re.length]) statistic[re.length] = [];
        statistic[re.length].push(item);
        fs.writeFileSync(filepath, JSON.stringify(statistic, null, 4));
        return callback();
      }).catch(er => {
        return callback(er);
      });
    }, (er) => {
      if (er) return reject(er);
      return resolve(statistic);
    });
  });
}


module.exports = { search, getSearchStatistic };