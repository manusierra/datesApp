import React, { Fragment, useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types'; //? Para documentar

/*
 * *********************************** Programación ****************************
 */

//? Importamos el prop de padre a hijo con destructuring.
const Formulario = ({ crearCita }) => {
  //* Crear State para citas

  // Recoger datos formulario
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  // Función que se ejecuta cada vez que se escribe en un input o textarea.
  const actualizarState = (e) => {
    actualizarCita({
      //? Destructuring
      ...cita, //? Para no perder los cambios en el state.
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores

  //? Destructuring
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Recoger el botón del formulario onSubmit.
  const submitCita = (e) => {
    e.preventDefault();
    // Validar
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      setError(true);

      //? Colocar siempre un return en validaciones para evitar que se siga ejecutando.
      return;
    }
    // Eliminar mensaje de error al rellenar campos.
    setError(false);

    // Asignar Id
    //? Instalamos librería para generar id: UUID (npm i uuid) || SHORTID (npm i shortid)
    //? Se importa en la cabecera como el resto de elementos
    //? Importante generar un id porque cada elemento en React debe tener un ID único.
    cita.id = shortid();

    // Crear la cita
    //? Se deben generar en el listado principal para poder pasarlas a otros componentes mediante props.
    crearCita(cita);
    // Reiniciar el formulario.
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };

  //* Crear State para mensajes de error.

  const [error, setError] = useState(false);

  /*
   * ****************************** JSX ******************************
   */

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {
        /*? En JSX sólo ternarios.        */
        error ? (
          <p className="alerta-error"> Todos los campos son obligatorios</p>
        ) : null
      }

      <form action="" onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          //? Recoge el evento en el input.
          onChange={actualizarState}
          //? Permitirá resetear el código
          value={mascota}
        />

        <label htmlFor="">Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Propietario"
          onChange={actualizarState}
          value={propietario}
        />

        <label htmlFor="">Fecha </label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label htmlFor="">Síntomas</label>
        <textarea
          name="sintomas"
          id=""
          cols="30"
          rows="10"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Añadir cita
        </button>
      </form>
    </Fragment>
  );
};

//* Documentar componentes -> PropTypes
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
