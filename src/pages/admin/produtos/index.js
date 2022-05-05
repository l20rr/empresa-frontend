import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MenuAdmin from '../../../components/menu-admin';
import {useParams} from 'react-router-dom'
import '../../../App.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from '../../../services/api';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddIcon from '@material-ui/icons/Add';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    
  },
 
}));






export default function Produtos() {
 
  const classes = useStyles();

  const [produtos, setProdutos] = useState([]);
  const [ loading, setLoading ] = useState(true);
  

  useEffect(() =>{
    async function loadProdutos(){
      const response = await api.get("/api/produtos");
      setProdutos(response.data)
      setLoading(false);
    }
    loadProdutos();
    
  },[]);

  async function handleDelete(id){
    if(window.confirm("Deseja realmente excluir este produto?")){
      var result = await api.delete('/api/produtos/'+id);
      if(result.status ===200){
        window.location.href = '/admin/produtos';
      
      }else{
        alert('Ocorreu um erro. Por favor, tente novamente!');
      }
    }
  }
   
  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'Produtos'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
            <Button style={{marginBottom:10, backgroundColor:" #084d6e", color:"#fff"}} variant="contained"  href={'/admin/produtos/cadastrar'}>
              <AddIcon />
              Cadastrar 
            </Button>
            <Paper className={classes.paper}>
                <h2>Listagem dos Produtos</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper}>
                    {loading?(<LinearProgress style={{width:'50%', margin:'20px auto'}}  />):(
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nome produto</TableCell>
                          <TableCell align="center">Vendas</TableCell>
                          <TableCell align="center">Preço (€)</TableCell>
                          <TableCell align="center">Quadntidade em stock</TableCell>
                          <TableCell align="right">Opções</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody className='prod'>
                        {produtos.map((row) => (
                        
                          <TableRow key={row._id}>
                            <TableCell component="th"  scope="row">
                              <div><a id='nome' href={'/produtos/'+row._id}>{row.nome_produto}</a></div>
                            </TableCell>
                            <TableCell align="center">{row.numero_produto}</TableCell>
                            <TableCell align="center">{row.preco_produto}</TableCell>
                            <TableCell align="center">{row.qtd_produto - row.numero_produto}</TableCell>
                            <TableCell align="right">
                              <ButtonGroup aria-label="outlined primary button group">
                              <Button variant="contained" style={{ backgroundColor:" #084d6e", color:"#fff"}} href={'/admin/produtos/editar/'+row._id}><AutorenewIcon /> Vendas</Button>
                            <Button variant="contained" color="secondary" onClick={() => handleDelete(row._id)}><ClearIcon /></Button>
                        </ButtonGroup>
                      
      
                            </TableCell>
                          </TableRow>
                          
                        ))}
                      </TableBody>
                    </Table>)}
                  </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}