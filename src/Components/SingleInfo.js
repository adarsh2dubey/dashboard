import React,{useEffect} from 'react'
import './info.css';

export const SingleInfo = () => {
    function updateProgress1(progressPercentage) {
        const progress = document.querySelector('.progress3');
        const progressText = document.getElementById('progressText3');
        
        if (!progress) {
          console.error("Progress element not found.");
          return;
        }
      
        const radius = progress.getAttribute('r');
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progressPercentage / 100) * circumference;
      
        progress.style.strokeDasharray = `${circumference} ${circumference}`;
        progress.style.strokeDashoffset = offset;
        progressText.textContent = `${progressPercentage}%`;
      }
   
      // Example usage: Call updateProgress with the desired progress percentage (0 to 100)
    // This will update the progress bar to 75%
      // This will update the progress bar to 75%
      useEffect(()=>{
        updateProgress1(75); 
        
      },[])

  return (
    <div class="singleinfo p-1">
        <h5 class="text-secondary my-2 mx-1">Income</h5>
    <hr />
        <div class="progress-container2 d-flex justify-content-center mx-auto">
  <svg class="progress-circle" width="150" height="150" viewBox="0 0 100 100">
    <circle class="bg-circle" cx="50" cy="50" r="45"></circle>
    <circle class="progress3" cx="50" cy="50" r="45"></circle>
  </svg>
  <div  class="progress-text" id="progressText3">0%</div>
</div>
<p class="text-secondary px-2 py-1">Generating 75% profit regularly and looking forward to keep it up.</p>
    </div>
  )
}
