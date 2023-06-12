import React, { useContext } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { formContext } from "../../context/ContextoFormulario";
  
  // En este componente tenemos nuestro formulario y dentro de él
// tenemos los componentes que necesitan consumir nuestro estado.
// Recuerda cual es el paso que debemos tomar para que nuestros
// componentes puedan consumir un estado global.

const Formulario = () => {
  const {actions} = useContext(formContext);
  
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          {/*
           Si tan solo tuviesemos una manera de "encapsular" nuestros componentes
           para que puedan acceder al estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" action={actions.updateTrainer}/>
              <Input name="apellido" label="Apellido"  action={actions.updateTrainer}/>
              <Input name="email" label="Email" type="email" action={actions.updateTrainer} />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombre" label="Nombre"  action={actions.updatePokemon} />
              <Input type="text" name="tipo" label="Tipo" action={actions.updatePokemon} select={true} values/>
              <Input name="elemento" label="Elemento" action={actions.updatePokemon} />
              <Input name="altura" label="Altura" action={actions.updatePokemon}  />
              <Input name="edad" label="Edad" action={actions.updatePokemon}  />
            </div>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
