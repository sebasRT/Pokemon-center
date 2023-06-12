import React, { useContext } from "react";
import { formContext } from "../../context/ContextoFormulario";

const Detalle = () => {

  const { globalForm} = useContext(formContext)
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {`${globalForm.entrenador.nombre}`}</p>
          <p>Apellido: {`${globalForm.entrenador.apellido}`}</p>
          <p>Email: {`${globalForm.entrenador.email}`}</p>
        </div>

      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {`${globalForm.pokemon.nombre}`}</p>
          <p>Tipo: {`${globalForm.pokemon.tipo}`}</p>
          <p>Elemento: {`${globalForm.pokemon.elemento}`}</p>
          <p>Altura: {`${globalForm.pokemon.altura}`}</p>
          <p>Edad: {`${globalForm.pokemon.edad}`}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
