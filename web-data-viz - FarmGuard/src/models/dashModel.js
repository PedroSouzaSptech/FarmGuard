var database = require("../database/config");

function metrica() {

    var instrucaoSql = `SELECT 
                        temperatura as Temperatura,
                        DATE_FORMAT(dtDado,'%H:%i:%s') as momento_grafico
                        FROM Dados
                        ORDER BY idDado DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    metrica
}