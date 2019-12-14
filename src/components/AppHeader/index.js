//import './index.css';
import React from 'react';

class appHeader extends React.Component{
  render(){
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default appHeader;
