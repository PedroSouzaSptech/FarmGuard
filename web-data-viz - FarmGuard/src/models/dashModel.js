var database = require("../database/config");

function metricaEst() {

    var instrucaoSql = `SELECT idAviario, truncate(avg(dd.temperatura), 1) AS tempMedia
	                        FROM dados dd
	                        JOIN dispositivo dp
                            ON dd.fkDispositivo = dp.idDispositivo
                            JOIN aviario a 
                            ON dp.fkAviario = a.idAviario
                            GROUP BY idAviario
                            ORDER BY idAviario DESC;`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

function metricaDin(idAviario) {

  var instrucaoSql = `SELECT dd.temperatura Temperatura, DATE_FORMAT(dd.dtDado,'%H:%i:%s') momento_grafico
                        FROM dados dd
	                      JOIN dispositivo dp
                        ON dd.fkDispositivo = dp.idDispositivo
                        JOIN aviario a
                        ON dp.fkAviario = a.idAviario
                        WHERE idAviario = ${idAviario}
                        ORDER BY idDado DESC;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


// function do atualizar dados
function metricaDinAtt(idAviario) {

  var instrucaoSql = `SELECT dd.temperatura Temperatura, DATE_FORMAT(dd.dtDado,'%H:%i:%s') momento_grafico
                        FROM dados dd
	                      JOIN dispositivo dp
                        ON dd.fkDispositivo = dp.idDispositivo
                        JOIN aviario a
                        ON dp.fkAviario = a.idAviario
                        WHERE idAviario = ${idAviario}
                        ORDER BY idDado DESC LIMIT 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  metricaDin,
  metricaEst,
  metricaDinAtt
};
