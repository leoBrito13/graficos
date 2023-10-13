import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import VerticalBar from "../Charts/VerticalBar";
import "./index.css";
import StakedBar from "../Charts/StakedBar";

interface Props {
  dataInicio: string;
  dataFim: string;
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GraficosLine = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <VerticalBar
              titulo="Posts por mês"
              tipos={["posts_mes"]}
              dataInicio={props.dataInicio}
              dataFim={props.dataFim}
              tratarDados={false}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <VerticalBar
              tipos={["busca-resultado"]}
              dataInicio={props.dataInicio}
              dataFim={props.dataFim}
              tratarDados={false}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <VerticalBar
              legendas={[
                "Busca - Acessos pagos Google",
                "Busca - Acessos orgânicos",
              ]}
              tipos={[
                "busca-resultado|value_series_0",
                "busca-resultado|value_series_3",
              ]}
              dataInicio={props.dataInicio}
              dataFim={props.dataFim}
              tratarDados={true}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <StakedBar
              titulo={["Acessos Orgânicos Google"]}
              legendas={["Busca", "Imóvel"]}
              tipos={[
                "busca-resultado|value_series_3",
                "imovel-detalhe|value_series_3",
              ]}
              dataInicio={props.dataInicio}
              dataFim={props.dataFim}
              tratarDados={true}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <VerticalBar
              legendas={[
                "Posts",
                "Busca - Acessos orgânicos",
                "Conversão - Acessos pagos Google",
              ]}
              tipos={[
                "posts_total",
                "busca-resultado|value_series_3",
                "lead-form-imovel-contato|value_series_0",
              ]}
              dataInicio={props.dataInicio}
              dataFim={props.dataFim}
              tratarDados={true}
            />
          </Item>
        </Grid>
        <Grid item xs={6} className="grid_graficos">
          <Item>
            <StakedBar
              titulo={["Total"]}
              legendas={[
                "Posts",
                "Busca - Acessos Orgânicos",
                "Conversão - Acessos pagos Google",
              ]}
              tipos={[
                "posts_total",
                "busca-resultado|value_series_3",
                "lead-form-imovel-contato|value_series_0",
              ]}
              dataInicio={props.dataInicio}
              dataFim={props.dataFim}
              tratarDados={true}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GraficosLine;
