import React,{useEffect} from 'react'
import './info.css';

export const Info = () => {
  function updateProgress1(progressPercentage) {
    const progress = document.querySelector('.progress');
    const progressText = document.getElementById('progressText');
    
    if (!progress) {
      console.error("Progress element not found.");
      return;
    }
  
    const radius = progress.getAttribute('r');
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progressPercentage / 100) * circumference;
  
    progress.style.strokeDasharray = `${circumference} ${circumference}`;
    progress.style.strokeDashoffset = offset;
    progressText.textContent = `${progressPercentage}`;
  }
  function updateProgress2(progressPercentage) {
    const progress = document.querySelector('.progress2');
    const progressText = document.getElementById('progressText2');
    
    if (!progress) {
      console.error("Progress element not found.");
      return;
    }
  
    const radius = progress.getAttribute('r');
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progressPercentage / 100) * circumference;
  
    progress.style.strokeDasharray = `${circumference} ${circumference}`;
    progress.style.strokeDashoffset = offset;
    progressText.textContent = `${progressPercentage}`;
  }
  // Example usage: Call updateProgress with the desired progress percentage (0 to 100)
// This will update the progress bar to 75%
  // This will update the progress bar to 75%
  useEffect(()=>{
    updateProgress1(63); 
    updateProgress2(31); 
  },[])
  return (
    <>
      <div className="newuser p-2">
        <h6 class="text-secondary">NEW USERS</h6>
        <div class="d-flex justify-content-between">
          <div class="my-auto d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3DCA15" class="me-1 bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
    <h3>245%</h3>
</div>
          <div class="progress-container d-flex justify-content-end">
  <svg class="progress-circle" width="50" height="50" viewBox="0 0 100 100">
    <circle class="bg-circle" cx="50" cy="50" r="45"></circle>
    <circle class="progress" cx="50" cy="50" r="45"></circle>
  </svg>
  <div class="progress-text" id="progressText">0%</div>
</div>


        </div>
      </div>
      <div className="expense my-2 p-2">
        <h6 class="text-secondary">TOTAL EXPENSES</h6>
        <div class="d-flex justify-content-between">
          <div class="my-auto d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#CC0000" class=" me-1 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
    <h3>51%</h3>
</div>
          <div class="progress-container d-flex justify-content-end">
  <svg class="progress-circle" width="50" height="50" viewBox="0 0 100 100">
    <circle class="bg-circle" cx="50" cy="50" r="45"></circle>
    <circle class="progress2" cx="50" cy="50" r="45"></circle>
  </svg>
  <div class="progress-text" id="progressText2">32</div>
</div>


        </div>
      </div>
    </>
  )
}
