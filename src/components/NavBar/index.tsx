import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import getDataMesPassado from "../Utils/getDataMesPassado";
import getDataOntem from "../Utils/getDataOntem";

interface NavbarProps {
  onFilterClick: (dataInicio: string, dataFim: string) => void;
}

function Navbar({ onFilterClick }: NavbarProps) {

  const [dataInicio, setDataInicio] = useState(getDataMesPassado()); // Data de início padrão (1 mês atrás)
  const [dataFim, setDataFim] = useState(getDataOntem()); // Data de fim padrão (ontem)

  const handleClickBotao = () => {
    // Chame a função onFilterClick com os valores atuais das datas
    onFilterClick(dataInicio, dataFim);
  };

  // Crie um tema personalizado
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff", // Cor principal do Toolbar
      },
      secondary: {
        main: "#fff", // Cor secundária (por exemplo, para botões)
      },
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className="cabecalho">
          <Toolbar variant="dense">
            <div className="nav-busca">
              <TextField
                label="Data de Início"
                type="date"
                className="campo_date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                sx={{
                  margin: "auto 30px",
                }}
              />
              <TextField
                label="Data de Fim"
                type="date"
                className="campo_date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                sx={{
                  margin: "auto 30px",
                }}
              />
              <button className="filter-button" onClick={handleClickBotao}>
                Filtrar
              </button>
            </div>
          </Toolbar>
        </AppBar>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "50px auto",
            }}
          >
            <div className="nav-buttons">
              <Link to="/wp-content/themes/floripa/react-components/graficos/page-graficos.php">
                <button className="nav-button">Dados</button>
              </Link>
              <Link to="/comparativos">
                <button className="nav-button">Comparativos</button>
              </Link>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export default Navbar;
