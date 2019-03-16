import { ThemeProvider, useStyle } from 'hook-style';
import React, { useState } from 'react';
import Title  from './Title';
import ViewSource  from './ViewSource';
import { hsl2hex }  from './color';

import pkg from '../package';

function App() {
  const [fg, setFG] = useState('#9b4eff');
  const [bg, setBG] = useState('#f9d7ff');

  const className = useStyle`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    min-height: 100vh;

    & > p {
      max-width: 18rem;
      font-family: system-ui, sans-serif;
      line-height: 1.5;
    }
  `;
  
  function updateTheme(e) {
    const { pageX, pageY } = e.touches ? e.touches[0] : e;

    setFG(hsl2hex(pageY / window.innerHeight, 0.5, 0.45));
    setBG(hsl2hex(pageX / window.innerWidth, 0.5, 0.9));
  }

  return (
    <ThemeProvider theme={{ bg, fg }}>
      <div className={className} onMouseMove={updateTheme} onTouchMove={updateTheme}>
        <Title>hook-style</Title>
        <p>Change foreground & background hues by moving your pointer around ☝️</p>
        <ViewSource url="https://glitch.com/edit/#!/hook-style-theme-demo" />
        <code>{`hook-style@${pkg.dependencies['hook-style'].replace(/\^|\*/, '')}`}</code>
      </div>
    </ThemeProvider>
  );
}

export default App;
