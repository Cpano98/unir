var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((json) => {
      let joke = json.value;
      console.log(joke);
      res.render("index", { joke });
    });


});

router.get("/bower", function (req, res, next) {

  res.render("indexBower");

});

module.exports = router;
