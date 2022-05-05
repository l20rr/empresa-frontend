import React,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuAdmin from '../../../components/menu-admin';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';


import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import api from '../../../services/api'

const useStyles = makeStyles((theme) => ({
  root: {display: 'flex',},
  title: {flexGrow: 1,},
  appBarSpacer: theme.mixins.toolbar,
  content: {flexGrow: 1,height: '100vh',overflow: 'auto',},
  container: {paddingTop: theme.spacing(2),paddingBottom: theme.spacing(4),},
  paper: {padding: 35,display: 'flex',overflow: 'auto',flexDirection: 'column',},
  formControl:{width:'100%'},
  btnSuccess:{ backgroundColor:"green",color:"#fff","&:hover":{backgroundColor:"#12b912"}}
}));


export default function ProdutoEditar() {
  const classes = useStyles();

  const [nomeProduto , setNome] = useState('');
  const [descricaoProduto , setDescricao] = useState('');
  const [qtdProduto , setQtd] = useState('');
  const [valorProduto, setValor] = useState('')

  
  const {idProduto} = useParams()

  useEffect(()=>{
    async function getProduto(){
      var response = await api.get('/api/produtos.details/'+idProduto)

      setNome(response.data.nome_produto)
      setDescricao(response.data.descricao_produto)
      setQtd(response.data.qtd_produto)
      setValor(response.data.valor_produto)
    }
    getProduto()
  },[])

  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'PRODUTOS'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Button style={{marginBottom:10}} variant="contained" href={'/admin/produtos'}><ArrowBackIcon />  Voltar</Button>
              <Paper className={classes.paper}>
                <h2>Detalhes do produto {nomeProduto}:</h2>
                <div className='detalhes'>
                  <ul>
                    <li> <h3> ID: </h3> {idProduto}</li>
                    <li><h3> Descrição: </h3> {descricaoProduto}</li>
                    <li> <h3> Quantidade Comprada: </h3> {qtdProduto} </li>
                    <li><h3> Valor comprado: </h3> {valorProduto}€</li>

                  </ul>
                </div>
              </Paper>
            </Grid>
            
          </Grid>
          
        </Container>
      </main>
    </div>
  );
}

