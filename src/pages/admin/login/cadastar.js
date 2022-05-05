import React,{useState}from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import api from '../../../services/api'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        SDev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
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

export default function Cadastrar() {
  const classes = useStyles();

  const [nome , setNome] = useState('');
  const [email , setEmail] = useState('');
  const [senha , setSenha] = useState('');
  const [tipo , setTipo] = useState('');

  async function handleSubmit(){

    const data = {
      nome_usuario:nome,
      email_usuario:email,
      senha_usuario:senha,
      tipo_usuario:tipo}
      
      console.log(data)

      if(nome!==''&&email!==''&&senha!==''&&tipo!==''){
        const response = await api.post('/api/usuarios',data);

        if(response.status===200){
          window.location.href='/admin/usuarios'
        }else{
          alert('Erro ao cadastrar o usuário!');
        }
      }else{
        alert('Por favor, preencha todos os dados!');
      }

     

  }
    

  return (
 
       <ThemeProvider theme={theme}>
  
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
                         
    <Button style={{marginRight:250, backgroundColor:"#4E8098"}} variant="contained" href={'/'}><ArrowBackIcon />  Voltar</Button> <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign uppp
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="nome"
                  name="nome"
                  required
                  fullWidth
                  id="nome"
                  label="Full Name"
                  autoFocus
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                   required
                   id="email"
                   name="email"
                   label="Email"
                   fullWidth
                   autoComplete="email"
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                />
              </Grid>
               <Grid item xs={12}>
               <FormControl className={classes.formControl} style={{display:'hidden'}}>
                    <InputLabel id="labelTipo">Tipo</InputLabel>
                    <Select
                      labelId="labelTipo"
                      id="tipo"
                      value={tipo}
                      onChange={e => setTipo(e.target.value)}
                    >
                      <MenuItem value={1}>Administrador</MenuItem>
                      <MenuItem value={3}>Dono</MenuItem>
                     
                      
                    </Select>
                  </FormControl>
               </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  required
                  id="senha"
                  name="senha"
                  label="Senha"
                  fullWidth
                  autoComplete="senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Eu quero receber email com novidades"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/admin/login" variant="body2">
                  Já tem uma conta? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
     

  );
}