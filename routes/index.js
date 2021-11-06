const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports - router;

//This file collects the packaged group of
//API endpoints and prefixes them with
//"/api".  We also return a 404 error if
//we have requested an incorrect resource.
//using Express
