import React,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuAdmin from '../../../components/menu-admin';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import api from '../../../services/api'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';

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

  
  const [NProduto , setN] = useState('');
  const [qtdProduto , setQtd] = useState('');

  const {idProduto} = useParams()

  useEffect(()=>{
    async function getProduto(){
      var response = await api.get('/api/produtos.details/'+idProduto)

      setN(response.data.numero_produto)
      setQtd(response.data.qtd_produto)
  
    }
    getProduto()
  },[])

  async function handleSubmit(){

    const data = {
      qtd_produto:qtdProduto,
      numero_produto: NProduto,
    _id: idProduto}
      
      console.log(data)

      
        const response = await api.put('/api/produtos',data);

        if(response.status===200){
          window.location.href='/admin/produtos'
        }else{
          console.log("errado")
        }
     

  }
  
  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'USUÁRIOS'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Button style={{marginBottom:10}} variant="contained" href={'/admin/produtos'}><ArrowBackIcon />  Voltar</Button>
              <Paper className={classes.paper}>
                <h2>Editar </h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      type="number"
                      required
                      id="NProduto"
                      name="NProduto"
                      label="Vendas"
                      fullWidth
                      autoComplete="NProduto"
                      value={NProduto}
                      onChange={e => setN(e.target.value )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <Button variant="contained" onClick={handleSubmit} className={classes.btnSuccess}>
                  <SaveIcon />  Salvar
                  </Button>
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