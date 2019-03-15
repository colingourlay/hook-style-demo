import { useTheme, useStyle } from 'hook-style';
import React from 'react';

function Title({ children }) {
  const { bg, fg } = useTheme();

  const className = useStyle`
    display: inline-block;
    margin: 0.25em;
    border-radius: 0.25em;
    border: 0.125em solid ${fg};
    padding: 0.25em 0.75em 0.25em;
    background-color: ${bg};
    color: ${fg};
    font-size: 12.5vw;
  `;

  return <h1 className={className}>{children}</h1>;
}

export default Title;