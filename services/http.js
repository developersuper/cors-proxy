const axios = require('axios');

module.exports = {
  work: async (url, method, params, data, headers) => {
    try {
      const results = await axios({
        url,
        method,
        params,
        headers,
        data
      })
      return results.status
    }catch(err) {
      throw err
    }
  }
};