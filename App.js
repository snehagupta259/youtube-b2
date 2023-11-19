import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './video';
import Signin from './signin';
import { GoSignIn } from 'react-icons/go';


function App() {
  return (
    <div className="App">
      {/* <h3>REACT APP</h3>
      <Home /> */}

      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/video' element={<Video />}></Route> 
        <Route exact path='/signin' element={<Signin/>}></Route>             
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


// import ytLogo from './images/yt-logo.jpg'
// import searchIcon from'./images/search.jpeg'
// import {GiHamburgerMenu} from 'react-icons/gi'
// import {BiMicrophone} from 'react-icons/bi'
// import shayad from'./images/shayad.jpeg'
// import tseries from'./images/tseries.jpeg'
// import {GoHomeFill} from 'react-icons/go'

// function VideoGrid(){
//   return(
//     <div class="thumbnail">
//       <div class="video">
//         <img src={shayad} />
//       </div>
//       <div class="video-title">
//         <div>
//           <img src={tseries} height={'30px'} width={'30px'}></img>
//         </div>
//         <div class="video-info">
//           <h4 class="track-title margin-0">Shayad Title Track - Lyrical | Kartik Aryan </h4>
//           <p class="margin-0 smaller-fontsize">T-series</p>
//           <p class="margin-0 smaller-fontsize">230M Views . 4 years ago</p>
//         </div>
//       </div>
//     </div>
//     )

// }
// function Home(){
//   let videos = [1,2,3,4,5,6,7,8,9]
//     return( 
//       <div>
        
//         <div class="yt">
//         <div class="first">
//       <div class="item1">
//           <div class="a1">
//           <GiHamburgerMenu />
//           </div>
//           <div class="a2">
//             <img id='yt-logo' src={ytLogo}/>
//           </div>
//       </div>
//       <div class="item2">
//           {/* <div class="b1"></div> */}
//           <input class="header-search" placeholder='  Search..'/>
//           <button class= "search-button">
//             <img class="small-image" src= {searchIcon}></img>
//                     </button>
//           <div class="b2">
//             <BiMicrophone class="microphone"/>
//           </div>
//           </div>
      
//       <button class="item3">Sign In
//       </button>
//      </div>
//      <div class="main-section">
//       <div class="main-left">
//         <button class="yt-side-button">
//           <GoHomeFill /><span class="side-button-label">Home</span>
//         </button>
//         <button class="yt-side-button">
//           <GoHomeFill /><span class="side-button-label">home</span>
//         </button>
//         <button class="yt-side-button">
//           <GoHomeFill /><span class="side-button-label">home</span>
//         </button>
//         <hr />
//                     <button class="yt-side-button">
//                         <GoHomeFill /> <span class="side-button-label">Home</span>
//                     </button>
//                     <button class="yt-side-button">
//                         <GoHomeFill /> <span class="side-button-label">Home</span>
//                     </button>
//                     <button class="yt-side-button">
//                         <GoHomeFill /> <span class="side-button-label">Home</span>
//                     </button>

//       </div>
//       <div class="main-right">
//         {videos.map((video) => {
//           return <VideoGrid />
//         })}
//         </div>
//         </div>
//         </div>
//         </div>
        
//     )}

// export default Home;