import React, { useContext, useEffect, useState } from "react";
import {  formContext } from "../../context/ContextoFormulario";
import Select from "react-select";

const Input = ({ name, label, type = "text", action, select, dataOptions}) => {

  const [value, setValue] = useState("")
  
  const { handleForm} = useContext(formContext)

  const [options, setOptions] = useState([]);
  
  const [page, setPage] = useState(1)

  useEffect(() => {
    console.log(page);
  
  }, [page])
  
useEffect(() => {
  setOptions(dataOptions)
}, [dataOptions])

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
        select? <>
        <button onClick={()=>setPage(Math.max(page - 1, 1))}>&lt;</button>
        <button onClick={()=>setPage(Math.min(page + 1, 4))}>&gt;</button>
        <Select 
        options={options}
        type={type}
        id={name}
        onChange={e=>handleForm(name,e.value,action)}
        >

        </Select>  </>:     
         
        <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        onAbortCapture={onBlur}
      />

      }
    </div>
  );
};

export default Input;
