import React from 'react'
import "./target.css"
export const Target = () => {
  return (
    <div class="moreinfo  p-2">
      <div className="d-flex">
        <h2 style={{color:"#CC0000"}}>54%</h2>
        <div class="my-auto ms-2 w-100 linearprogress"> <div class="progressbar"><br /></div> </div>
      </div>
      <p class="text-secondary">Income Target</p>
    </div>
  )
}
