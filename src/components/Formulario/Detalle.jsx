import React, { useContext } from "react";
import { formContext } from "../../context/ContextoFormulario";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


/**
 * Componente que muestra el detalle del formulario, con
 * la info de cada uno de los campos que han sido completados.
 
 * @returns {JSX.Element}
 */

const Detalle = () => {

  const { globalForm} = useContext(formContext)

  const mutation = useMutation(async(form)=>{
    return axios.post("https://jsonplaceholder.typicode.com/todos",
      {    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
    })
.then(data=>
  {data.status === 201 ? alert("formulario enviado correctamente") : alert("algo salio mal enviando el formulario")})

  })
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
          <p>Especie: {`${globalForm.pokemon.especie}`}</p>
          <p>Elemento: {`${globalForm.pokemon.elemento}`}</p>
          <p>Altura: {`${globalForm.pokemon.altura}`}</p>
          <p>Edad: {`${globalForm.pokemon.edad}`}</p>
        </div>
      </section>
      <button
        className="boton-enviar"

        onClick={()=> mutation.mutate(globalForm)}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
