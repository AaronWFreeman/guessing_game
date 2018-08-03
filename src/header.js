import React from 'react';
import TopNav from './top-nav';
import './header.css';

export default function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestartGame={() => props.onRestartGame()}
      />
      <h1>Hot or Cold</h1>
    </header>
  );
}
