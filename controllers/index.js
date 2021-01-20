const http = require('../services/http');

module.exports = {
  index: async (req, res, next) => {
    const url = req.body.url
    if(!url) {
      res.status(400).json({ error: 'no url' })
    }
    const method = req.body.method || 'Get'
    const data = req.body.data || {}
    const params = req.body.params || {}
    const headers = req.body.headers || {}
    try{
      let results = await http.work(url, method, params, data, headers)
      return res.json(results)
    }catch(err){
      next(err)
    }
  }
}