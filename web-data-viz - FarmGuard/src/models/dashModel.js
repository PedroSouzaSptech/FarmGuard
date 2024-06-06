var database = require("../database/config");

function metricaEst() {

    var instrucaoSql = `SELECT idAviario, truncate(avg(dd.temperatura), 1) AS tempMedia
	                        FROM Dados dd
	                        JOIN Dispositivo dp
                            ON dd.fkDispositivo = dp.idDispositivo
                            JOIN Aviario a 
                            ON dp.fkAviario = a.idAviario
                            GROUP BY idAviario
                            ORDER BY idAviario DESC;`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

function metricaDin(idAviario) {

  var instrucaoSql = `SELECT dd.temperatura Temperatura, DATE_FORMAT(dd.dtDado,'%H:%i:%s') momento_grafico
                        FROM Dados dd
	                    JOIN Dispositivo dp
                        ON dd.fkDispositivo = dp.idDispositivo
                        JOIN Aviario a
                        ON dp.fkAviario = a.idAviario
                        WHERE idAviario = ${idAviario}
                        ORDER BY idDado DESC;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  metricaDin,
  metricaEst
};
