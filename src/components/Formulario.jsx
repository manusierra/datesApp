import React, { Fragment, useState } from 'react';

/*
 * *********************************** Programación ****************************
 */

const Formulario = () => {
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
      console.log('error');
      //? Colocar siempre un return en validaciones para evitar que se siga ejecutando.
      return;
    }
    console.log('agregando... ');
    // Asignar Id

    // Crear la cita

    // Reiniciar el formulario.
  };

  /*
   * ****************************** HTML ******************************
   */

  return (
    <Fragment>
      <h2>Crear Cita</h2>
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
          name={sintomas}
          id=""
          cols="30"
          rows="10"
          className="u-full-width"
          onChange={actualizarState}
          value="sintomas"
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Añadir cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
