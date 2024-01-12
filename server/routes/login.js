const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", function (req, res) {
  res.render("log-in", { user: req.user });
  console.log(req.user.username);
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

module.exports = router;
