import React from 'react';

function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        minHeight: '100vh'
      }}
    >
      <h1
        style={{
          fontSize: '48px',
          color: '#155724'
        }}
      >
        Welcome to User Management App
      </h1>

      <p
        style={{
          fontSize: '24px',
          color: '#2e7d32',
          marginTop: '20px'
        }}
      >
        Add users and See users list.
      </p>

     
    </div>
  );
}

export default Home;