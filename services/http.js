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
      return results.data
    }catch(err) {
      throw err
    }
  }
};