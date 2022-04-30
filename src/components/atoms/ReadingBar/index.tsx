import React from 'react'

const ReadingBar = ({ text }) => {
  return (
    <div id="reading-progress" className="border-yellow squiggle" style={{}}>
        <div id="reading-progress-fill"></div>
    </div>
  )
}

const readingProgress = document.querySelector('#reading-progress-fill') HTMLCollectionOf<HTMLElement></HTMLElement>;
document.addEventListener('scroll', function(e) {
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  readingProgress.style.setProperty('width', w + '%');
});

export default ReadingBar
