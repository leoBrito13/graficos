import formatarData from './formatarData.js';

const getDataMesPassado = () => {
    const today = new Date();
    today.setMonth(today.getMonth() - 1);
    return formatarData(today);
  };

  export default getDataMesPassado;