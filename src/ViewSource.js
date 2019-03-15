import { useStyle } from 'hook-style';
import React from 'react';

function ViewSource({ url }) {
  const className = useStyle`
    margin: 1rem;
    cursor: pointer;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.25);
    }
  `;

  return (
    <a className={className} href={url} target="_blank">
      <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fview-source%402x.png?1513093958802" alt="view source button" aria-label="view source" height="33" />
    </a>
  );
}

export default ViewSource;