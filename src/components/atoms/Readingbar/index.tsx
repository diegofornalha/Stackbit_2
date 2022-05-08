import * as React from 'react';
import Script from 'next/script';
import classNames from 'classnames';



const Readingbar = ({ text }) => {
  return (
    <div id="reading-progress" className='border-yellow squiggle'><div id="reading-progress-fill"></div></div>

    <div>

  <Script
const readingProgress = document.querySelector('#reading-progress-fill');
document.addEventListener('scroll', function(e) {
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  readingProgress.style.setProperty('width', w + '%');
}); />

<Style>
#reading-progress {
  position: fixed;
  width: 100%;
  height: 5px;
  z-index: 9999;
  top: 0;
  left: 0;
}
#reading-progress-fill {
  height: 5px;
  width: 1%;
}
/* Theme */
#reading-progress-fill {
  -webkit-transition: width 100ms ease;
  -o-transition: width 100ms ease;
  transition: width 100ms ease;
  background-color: #FEE715;
}
<>  
  
  )
}

export default Readingbar



 return (
        <div
            className={classNames(
                'fixed',
                'inset-0',
                mapStyles({
                    backgroundSize: backgroundSize ?? 'cover',
                    backgroundPosition: backgroundPosition ?? 'center',
                    backgroundRepeat: backgroundRepeat ?? 'no-repeat'
                }),
                className
            )}
            style={{
                backgroundImage: `url('${url}')`,
                opacity: (opacity ?? 100) * 0.01
            }}
        />
    );
}

