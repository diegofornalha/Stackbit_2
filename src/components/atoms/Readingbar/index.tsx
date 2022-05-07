import * as React from 'react';
import Script from 'next/script';



export default function ReadingBar() {
  return (
    <>
    <div id="reading-progress" class="border-yellow squiggle"><div id="reading-progress-fill"></div></div>

<Script
const readingProgress = document.querySelector('#reading-progress-fill');
document.addEventListener('scroll', function(e) {
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  readingProgress.style.setProperty('width', w + '%');
}) />    </>
  )
}



