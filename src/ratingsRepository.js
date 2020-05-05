const redisClient = require("./helpers/redisClient");

const KEY_PREFIX = "ratings";
const generateKey = (...args) => args.join(":");

const add = async (assetId, rating) => {
  const key = generateKey(KEY_PREFIX, assetId);
  await redisClient.lpush(key, rating);
  return true;
};

const get = async (assetId) => {
  const key = generateKey(KEY_PREFIX, assetId);
  const ratings = await redisClient.lrange(key, 0, -1);
  const sum = ratings.reduce((a, b) => Number(a) + Number(b), 0);
  const average = sum / ratings.length;
  return average.toFixed(2);
};

const amount = async (assetId) => {
  const key = generateKey(KEY_PREFIX, assetId);
  const ratingsList = await redisClient.lrange(key, 0, -1);
  return ratingsList.length;
};

module.exports = {
  add,
  get,
  amount,
};
