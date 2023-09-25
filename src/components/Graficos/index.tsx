import GraficoPie from '../Charts/Pie';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import GraficoBar from '../Charts/Barchart';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Graficos = () =>{
    return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item><GraficoPie tipo="planos"/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><GraficoBar tipo="planos"/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><GraficoPie tipo="crm"/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><GraficoBar tipo="crm"/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><GraficoPie tipo="hosts"/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><GraficoBar tipo="hosts"/></Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default Graficos;
