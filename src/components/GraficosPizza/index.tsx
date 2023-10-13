import GraficoPie from '../Charts/Pie';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

interface Props{
  dataInicio:string,
  dataFim:string
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

const GraficosPizza = (props:Props) =>{
    return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item><GraficoPie label= "Busca" tipo="busca-resultado" datainicio ={props.dataInicio} datafim ={props.dataFim} /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><GraficoPie label= "Imóvel" tipo="imovel-detalhe" datainicio ={props.dataInicio} datafim ={props.dataFim} /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><GraficoPie label= "Conversão" tipo="lead-form-imovel-contato" datainicio ={props.dataInicio} datafim ={props.dataFim} /></Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default GraficosPizza;
