import React,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuAdmin from '../../../components/menu-admin';



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
export default function ProdutoCadastrar() {
  const classes = useStyles();

  const [nomeProduto , setNome] = useState('');
  const [descricaoProduto , setDescricao] = useState('');
  const [precoProduto , setPeco] = useState('');
  const [qtdProduto , setQtd] = useState('');
  const [valorProduto, setValor] = useState('')
 
  async function handleSubmit(){

    const data = {
      nome_produto:nomeProduto,
      descricao_produto:descricaoProduto,
      preco_produto:precoProduto,
      qtd_produto:qtdProduto,
      valor_produto:valorProduto,
      }
    

      if(nomeProduto!==''&&descricaoProduto!==''&&precoProduto!==''&&qtdProduto!==''){
        const response = await api.post('/api/produtos',data);

        if(response.status===200){
          window.location.href='/admin/produtos'
        }else{
          alert('Erro ao cadastrar o produto!');
        }
      }else{
        alert('Por favor, preencha todos os dados!');
      }

     console.log(data)

  }
  

  
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
                <h2>Cadastro de Produtos</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="nomeProduto"
                      name="nomeProduto"
                      label="Produto"
                      fullWidth
                      autoComplete="nomeProduto"
                      value={nomeProduto}
                      onChange={e => setNome(e.target.value)}
                      //mudança na variavel e gravação direta
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="descricaoProduto"
                      name="descricaoProduto"
                      label="descricao Produto"
                      fullWidth
                      autoComplete="descricaoProduto"
                      value={descricaoProduto}
                      onChange={e => setDescricao(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                     type="number"
                      required
                      id="precoProduto"
                      name="precoProduto"
                      label="Preco Produto"
                      fullWidth
                      autoComplete="precoProduto"
                      value={precoProduto}
                      onChange={e => setPeco(e.target.value)}
                    />
                     </Grid>
                
                  <Grid item xs={12} sm={6}>
                    <TextField
                    type="number"
                      required
                      id="qtdProduto"
                      name="qtdProduto"
                      label="Quadntidade Produto"
                      fullWidth
                      autoComplete="qtdProduto"
                      value={qtdProduto}
                      onChange={e => setQtd(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    type="number"
                      required
                      id="valorProduto"
                      name="valorProduto"
                      label="Valor Produto"
                      fullWidth
                      autoComplete="valorProduto"
                      value={valorProduto}
                      onChange={e => setValor(e.target.value)}
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