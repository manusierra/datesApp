//? useEffect -> Local Storage.
import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

/*
 * Programación ***********************************************************
 */

function App() {
  //* Citas en Local Storage.

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //* Creamos las citas en un State del componente principal.
  const [citas, guardarCitas] = useState(citasIniciales);

  //* useEffect para realizar operaciones cuando el State cambia.
  //? Equivale a DOMContentLoaded en JS o document.ready en jQuery.
  //? Se actualiza cuando el componente está listo o cuando sufre cambios.
  //? Para que sólo se ejecute una vez hay que pasarle un arreglo vacío: []
  //? Le pasamos 'citas' al arreglo para que las vigile el state de citas.

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas,citasIniciales]);

  // Función que copia las citas existentes y agrega la nueva.
  //? Para pasar funciones de los padres a los hijos usamos props.
  const crearCita = (cita) => {
    guardarCitas([
      ...citas, //? Siempre hacer copia
      cita,
    ]);
  };

  // Función para eliminar citas por ID.
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  // Título condicional en administrador de citas.
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administrar citas';

  /*
   * JSX ********************************************************************
   */

  return (
    <Fragment>
      <h1> Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            {/* Pasamos la función de padre a hijo con un prop */}
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
      /
    </Fragment>
  );
}


export default App;
