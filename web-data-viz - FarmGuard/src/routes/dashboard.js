var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/metrica", function (req, res) {
    dashController.metrica(req, res);
})

module.exports = router;