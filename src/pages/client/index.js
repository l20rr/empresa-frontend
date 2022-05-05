import React from "react";
import '../../styles.css'
import Sdev from './Sdev.jpg'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import desk from './desktop.png'
import port from './computador-portatil.png'
import web from './web.png'

import proj from '../../assets/dash.jpg'
import proj3 from '../../assets/user.jpg'
import proj4 from '../../assets/prod.jpg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        SDev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function Home(){

    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };






    return(
      <div >
        <header className="header">
    <h1 style={{fontFamily:"monospace", fontSize:50}} >SDev</h1>
    <nav >
        <ul id="hed">
            <li className="lis" ><a className="a" href="#con">Sobre</a></li>
            <li className="lis" id="cadas"><a  className="a" href="/admin/cadastrar">Cadastrar</a></li>
            <li className="lis" id="lo"><a  style={{color:'#000'}}  href={'/admin/login'}>Login</a></li>
        </ul>
    </nav>
   
</header> 
<main className="main">
    
     <div className="container1">
        <img src={Sdev} alt="logo" />
       <div className="text2">
       <h1>Sistema de gestão empresarial</h1>
       <p>A ferramenta que simplifica a gestão da sua empresa!</p>
       <input type={'text'} placeholder={'   Nome'}/>
       <input type={'email'} placeholder={'  E-mail'}/>
       <button>Saber mais</button>
       </div>
    </div>
   <div id="sele">
   <div id="gri">  <h2>Recursos do Sistema de Gestão Empresarial</h2>
    <div className="container3">
  
        <div className="division3" id="d1">
        <img className="icon"  src={port} />
        <h3> Sistema de Controle Financeiro</h3>
        </div>
        <div className="division3"id="d2">
        <img className="icon"  src={web} />
        <h3> Sistema de Fluxo de Caixa</h3>
       </div>
       <div className="division3"id="d3">
       <img className="icon"  src={port} />
       <h3> Sistema de Controle de Vendas</h3>
        </div>
        <div className="division3"id="d4">
        <img className="icon" src={desk}  />
        <h3> Sistema de Controle de Stock</h3>
        </div>
        <div className="division3"id="d5">
        <img className="icon"  src={web} />
        <h3> Sistema de Controle de Funcionarios</h3>
       </div>
       <div className="division3"id="d6">
       <img className="icon"  src={desk} />
       <h3>  Sistema de Soluções</h3>
        </div>
    </div>
    </div>
    <div className="container4">
    
       <div className="total">
       <div className="division4">
        <img className="icon1"  src={proj} />
        <div className="contro">
        <h3>Controle do Fluxo</h3>
        <ul>
        <li className="bol"  >Faça gestão de funcionarios </li>
            <li className="bol"  >Tenha o controle de cadastros </li>
            <li  className="bol">Faça gestão das contas </li>
        </ul>
        </div>
        </div>
        <div className="division4" id="ft">
        <img className="icon1"  src={proj3} />
        <div className="contro">
        <h3>Controle do Fluxo</h3>
        <ul>
        <li className="bol"  >Faça gestão de funcionarios </li>
            <li className="bol"  >Tenha o controle de cadastros </li>
            <li  className="bol">Faça gestão das contas </li>
        </ul>
        </div>
       </div>
       <div className="division4">
       <img className="icon1"   />
        <div className="contro">
        <h3>Controle do Fluxo</h3>
        <ul>
            <li className="bol" >Faça gestão de funcionarios </li>
            <li className="bol" >Tenha o controle de cadastros </li>
            <li className="bol" >Faça gestão das contas </li>
        </ul>
        </div>
        </div>
        <div className="division4" id="ftt">
       <img className="icon1"  src={proj3} />
        <div className="contro">
        <h3>Controle do Fluxo</h3>
        <ul>
            <li className="bol"  >Faça gestão de funcionarios </li>
            <li className="bol"  >Tenha o controle de cadastros </li>
            <li  className="bol">Faça gestão das contas </li>
        </ul>
        </div>
        </div>
        <div className="division4">
       <img className="icon1"  src={proj4} />
        <div className="contro">
        <h3>Controle do Fluxo</h3>
        <ul>
            <li className="bol"  >Faça gestão de funcionarios </li>
            <li className="bol"  >Tenha o controle de cadastros </li>
            <li  className="bol">Faça gestão das contas </li>
        </ul>
        </div>
        </div>
       </div>
    </div>
    <div className="container5">
      <div className="conteudo" id="con">
          <h2>Quem somos?</h2>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
         and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className="faq">
          <h3>F.A.Q.:</h3><br/>
      <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{backgroundColor:' rgb(54, 54, 54)', color:'#fff'}}>
        <AccordionSummary
          
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography  style={{ color:'#fff'}}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{backgroundColor:' rgb(54, 54, 54)', color:'#fff'}}>
        <AccordionSummary
        
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography style={{ color:'#fff'}}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{backgroundColor:' rgb(54, 54, 54)', color:'#fff'}}>
        <AccordionSummary
          
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography style={{ color:'#fff'}}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{backgroundColor:'rgb(54, 54, 54)', color:'#fff'}}>
        <AccordionSummary
          
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
      </div>
    
      </div>
   </div>
   
</main>
<Box mt={8} style={{backgroundColor:"#fff", marginBottom:30}}>
        <Copyright />
      </Box>
    </div>
    
    
    )
}

export default Home