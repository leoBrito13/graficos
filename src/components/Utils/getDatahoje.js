import formatarData from './formatarData.js';

const getDatahoje = () => {
    const today = new Date();
    today.setDate(today.getDate());
    return formatarData(today);
  };

export default getDatahoje