import React from 'react';

const Clima = ({resultado}) => {
    //la api de openwather no es tan precisa con las temperaturas minimas y maximas
   
    const {name,main}= resultado;
    if(!name)return null;
    const kelvin = 273.15;
    return ( <div className="card-panel white col s12">
        <div className="black-text">
            <h2>El clima de {name} es : </h2>
            <p className="temperatura">
                {parseFloat(main.temp - kelvin,10).toFixed(1)}<span>&#x2103;</span>

            </p>

        

          
        </div>

            </div>);
}
 
export default Clima;