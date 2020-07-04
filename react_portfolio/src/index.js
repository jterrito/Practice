import React, {Component} from 'react'
import ReactDOM from 'react-dom'






var style = {
  backgroundColor: 'white',
  color: 'black',
  fontFamily: 'Arial'
}



ReactDOM.render(
  <div style={style}>
    <h1 id="heading element"><em><center>Jennifer's Portfolio</center></em></h1>
   <p>Welcome to my portfolio. Please find my projects below:</p>
  <ul>
   <li> <a href="https://jen-analogue-clock.web.app/" target="_blank">'Analog Clock'</a>
</li>
<li> <a href="" target="_blank">'Literary Typing Timer'</a>
</li>
<li> <a href="" target="_blank">'Tic Tac Toe'</a>
</li>
  </ul>
  </div>,
  document.getElementById('root')
)