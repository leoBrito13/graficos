const loadData = async (tipo) => {
    try {
      //const response = await fetch(`/wp-content/themes/floripa/react-components/graficos/dist/data/${tipo}.json`);
        //const response = await fetch(`/data-management/graficos/dist/data/${tipo}.json`);
        const response = await fetch(`/data/${tipo}.json`);
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