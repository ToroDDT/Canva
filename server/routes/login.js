const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("log-in");
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

module.exports = router;
