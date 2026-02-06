const app = require("../backend/server");

module.exports = (req, res) => {
  const originalUrl = req.url || "";
  const queryIndex = originalUrl.indexOf("?");
  const query = queryIndex >= 0 ? originalUrl.slice(queryIndex) : "";

  req.url = `/analyze${query}`;
  return app(req, res);
};
