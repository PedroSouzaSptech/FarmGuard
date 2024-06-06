var model = require("../models/dashModel");

function metricaEst(req, res) {

    console.log(`Recuperando a média de temperatura em todos os aviários`);

    model.metricaEst().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function metricaDin(req, res) {

    var idAviario = req.params.idAviario;

    console.log(`Recuperando medidas do aviário ${idAviario} em tempo real`);

    model.metricaDin(idAviario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    metricaDin,
    metricaEst
}