import { message,Avatar } from "antd";
import { useEffect ,useContext, useState} from "react";
import { SharedData } from "../../../Layout/DefaultLayout";
import clsx from 'clsx'
import Styles from './profile.module.scss'
import FormUpdate from './formUpdate'
import VideoUpLoaded from "./yourVideos/VideoUpLoaded";
import LikedVideos from "./likedVideos/LikedVideo";
function Profile() {
    const [videoCategory,setVideoCategory]= useState('Videos')
    const {profileInfo,setProfileInfo}=useContext(SharedData)
    const Token = localStorage.getItem('jwtToken')
   useEffect(()=>{

     fetch("http://localhost:8080/profile",{
        method:"GET",
        headers:{
           "Authorization": ` ${Token}`,
           'Content-type':'application/json'
         }
    })
     .then(res=>{
        if(!res.ok)
        {
            message.error("server bận")
        }
        else{
            return res.json()
        }})
        .then((data)=>{
            setProfileInfo(data)
        })
        .catch(()=>{message.error('server bận')})
       },[])
    return ( 
        <div className={clsx(Styles.yourProfile)}>
            <div className={clsx(Styles.infoProfile)}>
                <div>
                  <Avatar size={200}
                  src={profileInfo.profilePhoto.path}
                  />
                  <p className={clsx(Styles.yourCaption)}>{profileInfo.caption}</p>
                </div>

                <div className={clsx(Styles.yourInfo)}>
                    <h4 >Tên:{profileInfo.name}</h4>
                   {profileInfo.author&& <h4> id:{profileInfo.author}</h4>}
                 <div className={clsx(Styles.modifyInfo)}>
                    <p>follower</p>
                    <p>following</p>
                  </div>
                  <FormUpdate
                   profileInfo={profileInfo}
                   setProfileInfo={setProfileInfo}/>
                </div>
            </div>
            
            <div style={{borderBottom:'1 solid black'}}>
                <div>
                    <div className={clsx(Styles.yourHistory)}>

                       <div onClick={()=>{setVideoCategory('Videos')}} className={clsx(Styles.videoCategory,{[Styles.underText]:videoCategory==='Videos'})}>
                          <h3> Videos</h3>
                       </div>
                        <div onClick={()=>{setVideoCategory('Liked')}} className={clsx(Styles.videoCategory,{[Styles.underText]:videoCategory==='Liked'})}>
                          <h3> Liked</h3>
                       </div>
                    </div>
                    <hr/>
                </div>
                <div className={clsx(Styles.yourVideos)}>
                    {videoCategory==='Videos'?<VideoUpLoaded/>:<LikedVideos/>}
                </div>

            </div>
        </div>
     )
}

export default Profile;