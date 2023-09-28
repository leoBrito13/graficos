const loadData = async (tipo,datainicio,datafim) => {
  try {
    const response = await fetch(`/wp-json/api/carregagraficos?tipo=${tipo}&datainicio=${datainicio}&datafim=${datafim}`);
    //const response = await fetch(`/data/${tipo}.json`);
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
