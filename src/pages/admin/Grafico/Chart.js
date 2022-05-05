import React, {useState,useEffect} from 'react';
import { Chart } from "react-google-charts";

import api from '../../../services/api';
import _ from 'lodash'

export const data = [
  ["Task", "Hours per Day"],
  ["Produto 1", 7],
  ["Produto 2", 9],
  ["Produto 3", 13],
  ["Produto 4", 3 ],
  ["Produto 5", 11],
];


export const options = {
  title: "porcentagem por venda",
};

export default function Graf() {
  /*
 const [produtos, setProdutos] = useState([]);
  
 const loadData = () =>{
  const values = _.groupBy()
 }
  

 useEffect(() =>{
  async function loadProdutos(){
    const response = await api.get("/api/produtos");
    setProdutos(response.data)

  }
  loadProdutos();
  
 },[]);


 var total = produtos.reduce(getTotal, 0);
 function getTotal(total, item) {
 return total + (item.numero_produto * item.preco_produto);
 }
*/
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
