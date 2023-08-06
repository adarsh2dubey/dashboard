import logo from './logo.svg';
import './App.css';
import { useRef, useState,useEffect } from 'react';
import LineChart from './Components/LineChart';
import {Info} from './Components/Info';
import BarAndLine from './Components/BarAndLine';
import {Target} from './Components/Target';
import {SingleInfo} from './Components/SingleInfo';

function App() {
  const divRef = useRef(null);
  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    const displayElements = document.getElementsByClassName("display");
    for (let i = 0; i < displayElements.length; i++) {
      displayElements[i].style.display = isWide ? "flex" : "none";
    }
  }, [isWide]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === divRef.current) {
          const width=entry.contentRect.width
          if(width>=130){
            setIsWide(true)
          }else{
            setIsWide(false)
          }

        }
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);


  return (
   <div   className="body d-flex">
    <div         
         class="main">
    <nav class="navbar bg-body-tertiary">
  <div class="mx-4 d-flex justify-content-between">
    <a class="navbar-brand" href="#">
      <img src="data:image/png;base64,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" alt="Logo" width="100" class="d-inline-block align-text-top" />
     
    </a>
  </div>
  <form class="d-flex me-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
</nav>
 <div className="row m-0 ">
 <div className="col-3 p-3">
 <Info />
 <LineChart />

 </div>
 <div className="col-9 p-3">
  <div className="row my-1 p-2">
    Home  &gt; Analysis  &gt; Trend
  </div>
  <div className="row"> 
  <div className="col-9">
  <BarAndLine />
  </div>
  <div className="col-3">
 <SingleInfo />
  </div>
</div>
  <div className="row mt-3">
    <div className="col-4"><Target /></div>
    <div className="col-4"><Target /></div>
    <div className="col-4"><Target /></div>
 
  </div>
 </div>
 </div>
    </div>
    <div id="rightbar" ref={divRef} className="rightbar px-2 bg-light py-3 ">
    <div class="m-0 d-flex ">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
<p class="ms-3 display"  id="display1">User Profile</p>
</div>

<br />
<div class="m-0 d-flex ">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
</svg>
<p class="ms-3 display"  id="display2">Activity</p>

</div>
<br />
<div class="m-0 d-flex ">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
  <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
</svg>
<p class="ms-3 display"  id="display3">Analytics</p>

</div>
<br />
<div class="m-0 d-flex">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>
<p class="ms-3 display"  id="display4">Tools</p>

</div>

<br />
<div class="m-0 d-flex">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
<p class="ms-3 display"  id="display5">More info</p>

</div>

<br /><br /><br />
<div class="m-0 d-flex ">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
</svg>
<p class="ms-3 display"  id="display6">Chat</p>

</div>

<br />
<div class="m-0 d-flex ">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-airplane" viewBox="0 0 16 16">
  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z"/>
</svg>
<p class="ms-3 display"  id="display7">Transport</p>

</div>
 <br />
 <div class="m-0 d-flex ">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
<p class="ms-3 display"  id="display8">Sign Out</p>

</div>
    </div>

   </div>
  );
}

export default App;
