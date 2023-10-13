
const loadData = async (tipo, datainicio, datafim,filtro ='') => {
  try {
     const response = await fetch(`https://premium.colibritemporario2.com.br/wp-json/api/carregagraficos?tipo=${tipo}&datainicio=${datainicio}&datafim=${datafim}&filtro=${filtro}`);
   // const response = await fetch(`/data/${tipo}.json`);

    if (!response.ok) {
      throw new Error('Erro ao carregar JSON');
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Erro ao carregar JSON:', error);
  }
}

export default loadData;
