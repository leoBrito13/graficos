import formatarData from './formatarData.js';

const getDataOntem = () => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return formatarData(today);
  };

export default getDataOntem