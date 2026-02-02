import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {

  const [term, setTerm] = useState('')

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted!')
    setText('')

   }

  return (
    <GlobalContext.Provider value={{term, setTerm, handleSubmit}}>
      {children}
    </GlobalContext.Provider>
  )
}