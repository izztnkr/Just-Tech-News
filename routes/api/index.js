const router = require("express ");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);

module.exports = router;

// This file will simply collect all
//of the API routes (in this case
//created in "user-routes.js") and
//package them up for us using Express.
