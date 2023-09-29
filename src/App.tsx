import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GraficosPizza from './components/GraficosPizza';
import StakedBar from './components/Charts/StakedBar';
import NavBar from './components/NavBar';
import getDataMesPassado from './components/Utils/getDataMesPassado';
import getDataOntem from './components/Utils/getDataOntem';
import VerticalBar from './components/Charts/VerticalBar';

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
                  path="/"
                  element={<GraficosPizza dataInicio={dataInicio} dataFim={dataFim} />}
                />
                <Route
                  path="/comparativos"
                  element={<VerticalBar />}
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
