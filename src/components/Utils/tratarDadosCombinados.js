import processarTipo from "./processarTipo.js";
import loadData from "./loadData";
import loadDataCombinado from "./loadDataCombinado";

const tratarDadosCombinados = async (
  tipos,
  dataInicio,
  dataFim,
  tratarDados,
  legendas
) => {
  let resultados;
  if (tipos.length > 1) {
    const promessas = loadDataCombinado(tipos, dataInicio, dataFim);
    resultados = await Promise.all(promessas);
  } else if (tipos.length === 1) {
    const { novotipo, filtro } = processarTipo(tipos[0]);
    resultados = await loadData(novotipo, dataInicio, dataFim, filtro);
  }
  const colunas = {};
  if (tratarDados === false) {
    let resultadoTotal;
    if (Array.isArray(resultados)) {
      resultadoTotal = resultados[0];
    } else {
      resultadoTotal = resultados;
    }
    const resultKeys = Object.keys(resultadoTotal);
    resultKeys.forEach((legenda) => {
      colunas[legenda] = {
        total: resultadoTotal[legenda],
      };
    });
  } else {
    if (legendas) {
      legendas.forEach((legenda, index) => {
        colunas[legenda] = {
          total: resultados[index].total,
        };
      });
    } else {
      tipos.forEach((legenda, index) => {
        colunas[legenda] = {
          total: resultados[index].total,
        };
      });
    }
  }
  return colunas;
};

export default tratarDadosCombinados;
