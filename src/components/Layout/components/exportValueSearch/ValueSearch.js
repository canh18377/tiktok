import Home from "../../../pages/Home"
import Header from "../Header"
import { useState,createContext } from "react"
const ValueSearchContext=createContext()
const ValueSearch=()=>{
    
    const [contentSearch,setContentSearch]=useState('')
   
    return(
    <ValueSearchContext.Provider value={{
        contentSearch,
        setContentSearch
    }
    }>
         <Home/>
         <Header/>
         {console.log(typeof ValueSearchContext)}
    </ValueSearchContext.Provider>
    
    )
}
export default ValueSearch
export { ValueSearchContext}