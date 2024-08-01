import { useState } from "react"
import { Modal,Button } from 'antd';
import clsx from "clsx";
import Styles from './buttonlogin.module.scss'
import Select from "./loginSelect/Select";
import ContinuteNumber from "./loginSelect/ContinuteNumber/ContinuteNumber";
import SignUp from "./formSignUp/SignUp";
function ButtonLogIn(){
    const [isModelOpen,setIsModelOpen]=useState(false)
    const [isOpenLogIn,setIsOpenLogIn]=useState(false)
    const [account,setaccount]=useState({name:'',password:''})
    const [confilmAccount,setConfilmAccount]=useState(true)
    const [isLogIn,setIsLogIn]=useState(true)
    return(
     <div>
          <div>
          <Modal 
            centered
            width={'450px'}
            onCancel={()=>setIsModelOpen(false)}
            open={isModelOpen}
            footer={null} >
     <div className={clsx(Styles.contentLogIn)}>
      <div>
        <h1>Log in to TikTok</h1>
        </div>
        <div className={clsx(Styles.selects)}>
          <Modal
            centered
            width={'450px'}
            onCancel={()=>setIsOpenLogIn(false)}
            open={isOpenLogIn}
            footer={null}>
              
          {isLogIn? <ContinuteNumber 
           account={account}
           setaccount={setaccount}
           confilmAccount={confilmAccount}
           setConfilmAccount={setConfilmAccount}
           setIsLogIn={setIsLogIn}/>:<SignUp setIsLogIn={setIsLogIn}/>}
        
          </Modal>
          
       <Select
         onclick={()=>setIsOpenLogIn(true)}
         url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         content='UsePhone/Email/Username'
       />
            <Select
         onclick={()=>setIsOpenLogIn(true)}
         url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         content='UsePhone/Email/Username'
       />       <Select
         onclick={()=>setIsOpenLogIn(true)}
         url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         content='UsePhone/Email/Username'
       />       <Select
         onclick={()=>setIsOpenLogIn(true)}
         url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         content='UsePhone/Email/Username'
       />       <Select
         onclick={()=>setIsOpenLogIn(true)}
         url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         content='UsePhone/Email/Username'
       />       <Select
         onclick={()=>setIsOpenLogIn(true)}
         url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         content='UsePhone/Email/Username'
       />
      </div>
      <footer>
        <p>
        By continuing with an account located in 
        Vietnam, you agree to our Terms of Service and acknowledge
         that you have read our Privacy Policy.
        </p>
      </footer>
      <hr/>
      Don’t have an account?<a style={{color:'red'}}> Sign up</a>
       </div>
    </Modal>
          </div>
            <Button
            onClick={()=>setIsModelOpen(true)            }
             className={clsx(Styles.logIn)}>
                Đăng Nhập</Button>
                
        </div>
    )
}
export default ButtonLogIn