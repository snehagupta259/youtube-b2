import React, { useEffect, useState } from 'react'
import Header from './Header'
import jaannishar from './images/jaannishar.jpg'
import avatar from './images/avatar.jpeg'
import {LiaThumbsUp, LiaThumbsDownSolid, LiaDownloadSolid} from 'react-icons/lia'
import {PiShareFatLight} from 'react-icons/pi'
import allVideos from'./useful-data-main/videos.json'
import { Link } from 'react-router-dom'


function VideoInfo(){
  return (
  <>
  <h5 class="video-title">
    Shayad Title Track | Kartik Aryan, Sara Ali Khan | Arjit Singh | Pritam
  </h5>
    <div class="video-details">
      <div class="channel-info">
        <img src={avatar} height={'30px'} width={'30px'} /> 
        <h6 className='channel-name'>
          <h6 className='margin-0'>Zee Music Company</h6> 
          <p className='margin-0'>102M subscribers</p></h6>
        <button className='subscribe'>subscribe</button> 
      </div>
      <div class="video-action-buttons">
        <button>
        <LiaThumbsUp size={'1.4rem'} />573k | <LiaThumbsDownSolid size={'1.4rem'} />
        </button>
        <button>
          <PiShareFatLight size={'1.4rem'}/>Share
        </button>
        <button>
        <LiaDownloadSolid size='1.4rem'/> Download
        </button>
      </div>
    </div>
    <div class="video-desc">
      <p>434K views &nbps; 1 year ago</p>
      <p>The first song you play when your heart skips a beat kyunki #Shayad you’re in love!♥️ 
 </p>
    </div>
  </>)
}

function SuggestedVideos(props){
  let video= props.video;
  return (
    <>
    <div className='suggested-video'>
    <div className='suggestion-image'>
      <Link to= {`/video?id=${video.id}`} ></Link>
      <img src={video.thumbnail.url} title={video.title} width={'300px'} />
      </div>
      <div className='suggestion-content'>
        <div className='suggestion-content'>
          <div className='video-info'>
          <p class="track-title margin-0 video-info-title">
            {video.title}
          </p>
          <p class="margin-0 smaller-fontsize">{video.channelName}</p>
          <p class="margin-0 smaller-fontsize">{video.views} views . {video.uploadedAt} </p>
          </div>
        </div>
        </div>
        </div>
        </>
  )
}



function video() {
 //let videos =[1,2,3,4,5,6,7,8]
//const [currVideoId, setCurrentVideoId] = useState("");
//{useEffect(() => {
  let address = new URL(window.location);
  let queryParameters = address.searchParams;
  let currentVideoId = queryParameters.get("id");

 // setCurrentVideoId(currentVideoId);
//},[])};

 let videos= allVideos;
  return (
    <div>
      <Header />
      <div className='video-main-page'>
        <div className='video-frame'>
        <iframe className='iframe-video' src={`https://www.youtube.com/embed/?si=_Orp-HFk-9djNerL?rel=0&mute=0&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <VideoInfo />
        </div>
        <div className='suggestions'>
          <p>Suggested Videos</p>
          {videos.map((video) => {
            return (<SuggestedVideos video ={video} />)
          })}

        </div>
      </div>
    </div>
  )
}

export default video
