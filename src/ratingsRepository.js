const redisClient = require("./helpers/redisClient");

const KEY_ASSET = assetId => `ratings:${assetId}`;

const add = async (assetId, rating) => {
  const key = KEY_ASSET(assetId);
  await redisClient.lpush(key, rating);
  return true;
};

const get = async assetId => {
  const key = KEY_ASSET(assetId);
  const ratings = await redisClient.lrange(key, 0, -1);
  const sum = ratings.reduce((a, b) => Number(a) + Number(b), 0);
  const average = sum / ratings.length;
  return average.toFixed(2);
};

const amount = async assetId => {
  const key = KEY_ASSET(assetId);
  const ratingsList = await redisClient.lrange(key, 0, -1);
  return ratingsList.length;
};

module.exports = {
  add,
  get,
  amount
};
