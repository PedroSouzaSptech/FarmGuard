var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/metrica", function (req, res) {
    dashController.metricaEst(req, res);
})

router.get("/metrica/:idAviario", function (req, res) {
    dashController.metricaDin(req, res);
})

// function do atualizar dados
router.get("/tempo-real/:idAviario", function (req, res) {
    dashController.metricaDinAtt(req, res);
})


module.exports = router;