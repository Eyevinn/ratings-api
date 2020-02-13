const ratingsRepository = require("./ratingsRepository");

module.exports = (fastify, opts, next) => {
  fastify.post("/:assetId/:rating", async (req, res) => {
    const assetId = req.params.assetId;
    const rating = req.params.rating;
    if (!assetId || !rating) return res.code(500).send();

    const store = await ratingsRepository.add(assetId, rating);
    res
      .header("Cache-Control", "public, no-cache")
      .code(200)
      .send(store);
  });

  fastify.get("/:assetId", async (req, res) => {
    const assetId = req.params.assetId;
    if (!assetId) {
      return res.code(500).send("Missing required assetId");
    }

    const rating = await ratingsRepository.get(assetId);
    res
      .header("Cache-Control", "public, no-cache")
      .code(200)
      .send(rating);
  });

  next();
};
