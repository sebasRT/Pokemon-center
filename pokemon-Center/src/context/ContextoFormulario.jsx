// Aqui debemos crear nuestro contexto y nuestro provider.
import React, { createContext,  useReducer,  } from 'react'

const formContext = createContext();
/**
 * aqui se guardan las actions que utilizara el reducer.
 */
const actions={
updateTrainer: "ACTUALIZAR_ENTRENADOR",
updatePokemon: "ACTUALIZAR_POKEMON"
}
/**
 *   
 * 
 * @typedef {{entrenador:{nombre: String,apellido: String, email: String,}, 
 *            pokemon:{nombre: String,tipo: String,elemento: String,altura: String,edad: String}}} globalForm
 * @param {globalForm} state Es un objeto que representa el estado actual del formulario de registro de entrenador y pokemon
 * @param {*} action Dentro de este van guardados el nombre y el valor de los parametros que se editaran (action.name, action.value). Ademas viene incluido el tipo de accion que se realizara(action.type).
 * @returns {globalForm}Retorna el estado del formulario actualizado 
 */
const formReducer = (state, action) => {
    switch (action.type) {
    case actions.updateTrainer:
     return {...state,entrenador:{...state.entrenador,[action.name]:action.value}};
      break;
      case actions.updatePokemon:
      return {...state,pokemon:{...state.pokemon,[action.name]:action.value}};
        break;
      default:
        return state;
    }
  };


const ContextoFormulario = ({children}) => {
  
  const [globalForm, dispatch] = useReducer(formReducer, {
        entrenador: {
          nombre:"",
          apellido:"",
          email:""
        },
        pokemon:{
          nombre:"",
          tipo:"",
          elemento:"",
          altura:"",
          edad:"",
        }
    })

    /**
     * 
     * @param {String} inputName se recibe el nombre del input que se edita dentro del formulario
     * @param {String} inputValue recibe el valor de dicho input
     * @param {String} actionType determina la accion que tomara el form reducer dependiendo si se debe cambiar los valores de "entrenador" o "pokemon".
     */
    const handleForm = (inputName,inputValue,actionType) =>
    {
        dispatch({name: inputName, value: inputValue, type: actionType })
        console.log(actionType);
    }
  

  return (
    <formContext.Provider value={{globalForm: globalForm, handleForm: handleForm, actions: actions}}>
        {children}
    </formContext.Provider>
  )
}

export  {ContextoFormulario,formContext}