const processarTipo = (tipo) => {
    let novotipo = "";
    let filtro = "";
    let tiposeparado = tipo.split("|");
    novotipo = tiposeparado[0];
    filtro = tiposeparado[1] || "";
    return { novotipo, filtro };
  };

  export default processarTipo;