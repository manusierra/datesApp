import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  //* Creamos las citas en un State del componenete principal.
  const [citas, guardarCitas] = useState([]);

  // Función que copia las citas existentes y agrega la nueva.
  //? Para pasar funciones de los padres a los hijos usamos props.
  const crearCita = (cita) => {
    guardarCitas([
      ...citas, //? Siempre hacer copia
      cita,
    ]);
  };

  return (
    <Fragment>
      <h1> Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            {/* Pasamos la función de padre a hijo con un prop */}
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">2/2</div>
        </div>
      </div>
      /
    </Fragment>
  );
}

export default App;
