import Header from "../components/Header";
import SideBar from "./SideBar";
import Styles from './defaultLayout.module.scss'
import clsx from "clsx";
import { useState,createContext } from "react";
const ValueSearchContext=createContext()
function DefaultLayout({children}) {
  const [contentSearch,setContentSearch]=useState('')
  const [account,setaccount]=useState({name:'',password:''})
  const [history,setHistory]=useState([])
    return (  
      <ValueSearchContext.Provider value={{
        contentSearch,
        setContentSearch,
        history,
        setHistory,
        setaccount,
        account

    }}>
              <div className={clsx(Styles.DefaultLayout)}>
            <Header/>
         <div className={clsx(Styles.container)}>
             <SideBar/>
             <div className={clsx(Styles.content)}> 
              {children} 
             </div>
         </div>
      </div>
      </ValueSearchContext.Provider>
    );
}

export default DefaultLayout;
export {ValueSearchContext}