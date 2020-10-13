import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header.js'
import Formulario from './components/Formulario.js'
import Clima from './components/Clima.js'

function App() {

  //state del formulario
  const [busqueda,guardarBusqueda]= useState({
    ciudad:'', 
    pais:''

})

const [consultar,guardarConsultar] =useState(false);
const [resultado,guardarResultado] = useState({})
const {ciudad,pais}=busqueda;

useEffect(()=>{
  const conAPI = async() =>{
    if(consultar){
      const id= '4200cd3265fbfb9934a8279f3039c568'
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${id}`;
    
      const respuesta = await fetch(url)
      const resultado = await respuesta.json();
      guardarResultado(resultado);
      guardarConsultar(false);

    }
  }
  conAPI();


},[consultar])

  return (
    <Fragment>
      <Header
      titulo="Clima"
      /> 

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
                <Formulario
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar={guardarConsultar}
                />
            </div>
            <div className="col m6 s12">
                <Clima
                resultado={resultado}
                />
            </div>

          </div>

        </div>

      </div>

    </Fragment>
    
  );
}

export default App;
  