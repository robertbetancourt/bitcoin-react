// dependency
import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
// components
import ListData from "./components/ListData/ListData";
import Navigation from "./components/Navigation/Navigation";
import  FormSearch  from "./components/FormSearch";
// css
import './App.css';

function App() {
let [datos, setDatos] = useState();
let [funciones, setFunciones] = useState();
  async function data(inputs)  {
    setDatos(datos = undefined)
    const {typeGL = "local", cryto = "BTC", coin = "USD"} = inputs
    try {
      const res = await axios.get(`https://apiv2.bitcoinaverage.com/indices/${typeGL}/ticker/${cryto}${coin}`);

      if (Response.status !== 200) {
          setFunciones(datos = inputs )
          setDatos(datos =  res.data)
      }

    } catch (error) {
        console.log(error, 'errors');
        setDatos(datos = 'change')
    }    
}
function deleteRow() {
  setDatos(datos = undefined)
}

function NullSearch() {
  if (datos === 'change') {
    return (
      <div className="container mt-3 text-center">
        <Alert variant="danger">
          <b>Please checkout your values.</b>
        </Alert>
      </div>
    )
  }
}
  return (
    <div className="">
      <Navigation/>
      <FormSearch data={data}/>
      <ListData search= {funciones} deleteRow ={deleteRow} data={datos}/>
      <div>{NullSearch()}</div>
    </div>
  );
}

export default App;
