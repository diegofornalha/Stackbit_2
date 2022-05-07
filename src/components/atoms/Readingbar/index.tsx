import * as React from 'react';
import Script from 'next/script';



var Readingbar = React.createClass({
  render: function() {
    return (
      <div>
        <div id="reading-progress" className="border-yellow squiggle"><div id="reading-progress-fill" /></div>
        <style dangerouslySetInnerHTML={{__html: "\n#reading-progress {\n  position: fixed;\n  width: 100%;\n  height: 5px;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n#reading-progress-fill {\n  height: 5px;\n  width: 1%;\n}\n/* Theme */\n#reading-progress-fill {\n  -webkit-transition: width 100ms ease;\n  -o-transition: width 100ms ease;\n  transition: width 100ms ease;\n  background-color: #FEE715;\n}\n" }} />
      </div>
    );
  }
});



