import clsx from "clsx";
import Styles from './continuteNumber.module.scss'
import { Button } from "antd";
function ContinuteNumber({HandleSubmit,account,setaccount,setConfilmAccount,confilmAccount}) {
    return ( 
          <form onSubmit={HandleSubmit}>
            <div className={clsx(Styles.containerLogin)}>
              <h1>LogIn</h1>
            <input id="name" 
            value={account.name}
            className={clsx(Styles.account)}
            placeholder="Account" 
            onChange={(e)=>{setaccount({...account,name:e.target.value})}}/>
           
            <input id="password" 
            value={account.password}
            className={clsx(Styles.account)} 
            placeholder="password" type="password" 
             onChange={(e)=>{setaccount({...account,password:e.target.value})}}/>
             <p style={{color:'red',display:!confilmAccount?'block':'none'}}>Incorrect account or password</p>
           
            </div>
            <div className={clsx(Styles.containerButton)}>
               <Button 
            onClick={()=>setConfilmAccount(true)}
            className={clsx(Styles.button)}>
              Try again
            </Button>

            <Button 
            htmlType={'submit'}
            className={clsx(Styles.button)}
            loading={!confilmAccount}>
              LogIn
            </Button>
            </div>
            <div className={clsx(Styles.footer)}>
              <hr/>
              <p>Don’t have an account?
                   Sign up</p></div>
            </form>)
}

export default ContinuteNumber;