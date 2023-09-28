import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Graficos from './components/Graficos';
import StakedBar from './components/Charts/StakedBar';
import NavBar from './components/NavBar';
import getDataMesPassado from './components/Utils/getDataMesPassado';
import getDataOntem from './components/Utils/getDataOntem';

const App: React.FC<{}> = () => {
  const [dataInicio, setDataInicio] = useState<string>(getDataMesPassado());
  const [dataFim, setDataFim] = useState<string>(getDataOntem());

  // Função para lidar com a atualização dos filtros
  const handleFilterUpdate = (de: string, ate: string) => {
    // Atualize o estado com as novas datas
    setDataInicio(de);
    setDataFim(ate);
  };

  return (
    <div>
      <div className="app">
        <main className="content">
          <BrowserRouter>
            <NavBar onFilterClick={handleFilterUpdate} />
            <div>
              <Routes>
                {/*wp-content/themes/floripa/react-components/graficos/page-graficos.php*/ }
                <Route
                  path="/wp-content/themes/floripa/react-components/graficos/page-graficos.php"
                  element={<Graficos dataInicio={dataInicio} dataFim={dataFim} />}
                />
                <Route
                  path="/comparativos"
                  element={<StakedBar />}
                />
              </Routes>
            </div>
          </BrowserRouter>
        </main>
      </div>
    </div>
  );
};

export default App;
