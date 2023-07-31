import React from 'react';

function Container() {
  return (   
    <div className="container m-3">
      <div className="note bg-white rounded p-2 shadow" style={{ width: '240px', float: 'left' }}>
        <h1 className="mb-2" style={{ fontSize: '1.1em' }}>This is the title</h1>
        <p className="mb-3" style={{ fontSize: '1.1em', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          This is the content
        </p>
      </div>
    </div>
  );
}

export default Container;
