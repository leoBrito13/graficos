import processarTipo from './processarTipo.js';
import loadData from "./loadData";
const LoadDataCombinado = (tipos,dataInicio,dataFim) =>{
    const promessas = tipos.map((tipo) => {
    const { novotipo, filtro } = processarTipo(tipo);
    return loadData(
      novotipo,
      dataInicio,
      dataFim,
      filtro
    );
  });
  return promessas;
}

  export default LoadDataCombinado;