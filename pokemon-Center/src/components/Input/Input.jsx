import React, { useContext, useEffect, useState } from "react";
import { ContextoFormulario, formContext } from "../../context/ContextoFormulario";
import { useQuery } from "@tanstack/react-query";
import  axios from "axios"
import Select from "react-select";



const Input = ({ name, label, type = "text", action, select}) => {

  const [value, setValue] = useState("")
  
  const { handleForm} = useContext(formContext)

  const [options, setOptions] = useState([]);

  const {isLoading, data: pokeTypes} = useQuery(['pokemon-types'], async()=> {
    return axios.get("https://pokeapi.co/api/v2/type/")
    .then(e=>{ return e.data.results})
    .then(e=> e.map((v,i)=>{return {value: i, label: v.name}}))
    .catch(e=>console.log(e))
  });

useEffect(() => {
  if (!isLoading) {
    console.log(pokeTypes);
    setOptions(pokeTypes)
  }

}, [isLoading])

  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setValue(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();
    handleForm(name,e.target.value,action)

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      {
        select? 
        <Select 
        options={options}>
        </Select> :     
        <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />

      }
    </div>
  );
};

export default Input;
