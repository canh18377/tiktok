import { useState } from "react"
import { Modal,Button,Form } from 'antd';
import clsx from "clsx";
import Styles from './header.module.scss'
import Select from "./loginSelect/Select";
function ButtonLogIn(){
    const [isModelOpen,setIsModelOpen]=useState(false)
  
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
       <Select
         url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         content='UsePhone/Email/Username'
       />
       <Select
         url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         content='UsePhone/Email/Username'
       /><Select
        url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        content='UsePhone/Email/Username'
      />
         <Select
        url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        content='UsePhone/Email/Username'
      />  <Select
       url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
       content='UsePhone/Email/Username'
     />
       <Select
         url="https://th.bing.com/th/id/OIP.wsWs8WcLQEFtdN_yZ5uQvwHaGc?w=186&h=162&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         content='UsePhone/Email/Username'
       />  <Select
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