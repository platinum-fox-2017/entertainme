const redis = require("redis");
const client = redis.createClient();

const setCache = (payload) => {
  client.set('entertainme', JSON.stringify(payload), 'ex', 600);
}

module.exports = setCache;