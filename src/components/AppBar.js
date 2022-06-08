import React from 'react';

const AppBar = ({titulo}) => {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid justify-content-center">
            <span className="navbar-brand mb-0 h1">{titulo}</span>
          </div>
        </nav>
      </>
    );
}

export default AppBar;